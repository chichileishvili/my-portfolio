/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GIORGI_CONTEXT = `You are an AI assistant for Giorgi Tchitchileishvili's portfolio website. You help visitors learn about Giorgi.

About Giorgi:
- Full name: Giorgi Tchitchileishvili
- Age: 22 years old
- Location: Tbilisi, Georgia
- Role: Full-stack Software Engineer with 2.5 years of experience
- Currently working at: Suada (EdTech platform) January 2023 - January 2026, Remote

Skills:
- Frontend: React.js, TypeScript, Redux, Apollo GraphQL, Styled Components, Storybook, Component Architecture
- Backend: Node.js, Express.js, NestJS, MongoDB, REST APIs, GraphQL
- Other: Socket.io, Git/GitHub, Microservices, Analytics Services, UI/UX Implementation
- English: C1 level
- Workflow: Agile, Remote collaboration

Experience at Suada:
- Developed and maintained production React applications
- Integrated and optimized GraphQL APIs using Apollo Client
- Published Suada's component library as a public repository
- Contributed to Suada's deployment to Microsoft Marketplace and Azure
- Built student-to-student messaging system
- Created complex analytics services with aggregation pipelines and dashboards
- Implemented Theme Customization System for enterprise branding
- Developed Quiz functionality with scoring and backend integration
- Created Course Pinning feature
- Various performance optimizations

Projects:
- Jobify App (MERN stack): A job-hunting platform with authentication, job tracking, statistics, and filtering. Live at jobify-app-41eq.onrender.com

Links:
- GitHub: github.com/chichileishvili
- LinkedIn: linkedin.com/in/giorgi-tchitchileishvili

Be friendly, helpful, and concise. If asked about something not related to Giorgi or his work, politely redirect the conversation. Don't make up information not provided above.`;

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build messages array with history
    const messages = [
      { role: "system", content: GIORGI_CONTEXT },
      ...(history || []).slice(-10).map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    console.log("Calling Lovable AI with message:", message);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const assistantResponse = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    console.log("AI response:", assistantResponse);

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in portfolio-chat function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
