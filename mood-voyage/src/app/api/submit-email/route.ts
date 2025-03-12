import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const {
      email,
      autoReferralSource,
      userReferralSelection,
      userReferralInput,
      favoriteFeatureSelection,
      favoriteFeatureInput,
    } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }


    // Insert into waitlist_signups table
    await sql`
    INSERT INTO waitlist_signups (
        email, 
        auto_referral_source, 
        user_referral_selection, 
        user_referral_input, 
        favorite_feature_selection, 
        favorite_feature_input
    ) VALUES (
        ${email}, 
        ${autoReferralSource || null}, 
        ${userReferralSelection || null}, 
        ${userReferralInput || null}, 
        ${favoriteFeatureSelection || null}, 
        ${favoriteFeatureInput || null}
    )
    `;


    return NextResponse.json({ message: "Signup submitted successfully" });
  } catch (error) {
    console.error("Error submitting signup:", error);
    return NextResponse.json({ error: "Failed to submit signup" }, { status: 500 });
  }
}
