"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Zap, FileText, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PrivGPT Studio - Usage Guidelines & Policies",
  description:
    "PrivGPT Studio's Terms of Service. Learn about user responsibilities, prohibited activities, intellectual property rights, and platform usage guidelines for our AI chat service.",
  keywords: [
    "Terms of Service",
    "AI usage policy",
    "user guidelines",
    "platform rules",
    "PrivGPT Studio terms",
    "AI chat terms",
    "prohibited activities",
    "intellectual property AI",
  ],
  openGraph: {
    title: "Terms of Service | PrivGPT Studio - Usage Guidelines & Policies",
    description:
      "Read PrivGPT Studio's Terms of Service covering user responsibilities, prohibited activities, and intellectual property rights for AI chat usage.",
    url: "https://privgpt-studio.vercel.app/terms",
    type: "website",
    images: [
      {
        url: "https://privgpt-studio.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "PrivGPT Studio Terms of Service Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | PrivGPT Studio",
    description:
      "Usage guidelines and policies for PrivGPT Studio's AI chat platform. Learn about responsible use and prohibited activities.",
    images: ["https://privgpt-studio.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://privgpt-studio.vercel.app/terms",
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PrivGPT Studio</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline">Try Chat</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-11 h-11 text-primary mr-3" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rules and guidelines you need to know. Use the platform
              responsibly.
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: August 16, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>1. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Users must use PrivGPT-Studio responsibly and comply with all
                  applicable laws.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Provide accurate information when creating accounts.</li>
                  <li>Do not misuse or disrupt the platform.</li>
                  <li>Respect the rights of other users.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Users are strictly prohibited from engaging in activities that
                  violate the law or infringe on others' rights.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Uploading malicious or harmful content.</li>
                  <li>Attempting unauthorized access to the platform.</li>
                  <li>Using the platform for fraudulent purposes.</li>
                </ul>
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    <strong>We Never:</strong> Allow illegal activity,
                    harassment, or data misuse on PrivGPT-Studio.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All content on PrivGPT-Studio, including text, images, and
                  software, is owned by PrivGPT-Studio or its licensors.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    You may use AI outputs for personal, research, or internal
                    purposes.
                  </li>
                  <li>Respect other users and follow platform rules.</li>
                  <li>
                    Do not redistribute or sell platform content without
                    permission.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Disclaimers & Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  PrivGPT-Studio is provided "as is" without warranties. We are
                  not liable for indirect or consequential damages.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>No guarantee of uninterrupted or error-free service.</li>
                  <li>Use the platform at your own risk.</li>
                  <li>We are not responsible for user-generated content.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update these Terms of Service occasionally. Continued
                  use of the platform indicates acceptance of updates.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Changes will be posted on this page.</li>
                  <li>
                    Important changes may be communicated via email or
                    notifications.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  6. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For questions about the Terms of Service, contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Support Email</h4>
                    <p className="text-sm text-muted-foreground">
                      support@privgptstudio.com
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Legal Department</h4>
                    <p className="text-sm text-muted-foreground">
                      legal@privgptstudio.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PrivGPT Studio</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Committed to transparency and responsible use.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="text-muted-foreground hover:text-foreground"
            >
              Chat
            </Link>
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              className="text-muted-foreground hover:text-foreground"
            >
              Support
            </Link>
          </div>
          <Separator className="my-6" />
          <p className="text-sm text-muted-foreground">
            &copy; 2025 PrivGPT Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
