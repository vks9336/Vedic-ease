// Test script to check Supabase Auth directly
// Run this in your browser console to test the signup

const testSignup = async () => {
  const { createClient } = await import(
    "https://cdn.skypack.dev/@supabase/supabase-js@2"
  );

  const supabase = createClient(
    "https://spceizsxpadgejoeliaq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwY2VpenN4cGFkZ2Vqb2VsaWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwOTUwMzEsImV4cCI6MjA3MzY3MTAzMX0.pID5Tax6Yor9z1gjHSphwKi_NBuVk61BwJaZAkNqnTs"
  );

  try {
    // Test 1: Simple signup without metadata
    console.log("Testing simple signup...");
    const { data, error } = await supabase.auth.signUp({
      email: "test@example.com",
      password: "password123",
    });

    if (error) {
      console.error("Simple signup error:", error);
    } else {
      console.log("Simple signup success:", data);
    }
  } catch (err) {
    console.error("Signup failed:", err);
  }
};

testSignup();
