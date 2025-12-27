"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import InputFieldError from "@/components/shared/InputFieldError";
import { submitContactForm } from "@/services/contact/contactForm";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message || "Message sent successfully!");
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } else if (state && !state.success) {
      toast.error(state.message || "Failed to send message. Please try again.");
    }
  }, [state]);

  return (
    <form
      id="contact-form"
      action={formAction}
      className="space-y-6"
      style={{ pointerEvents: "auto" }} // ✅ Uncommented!
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field>
          <FieldLabel htmlFor="name">Your Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            disabled={pending}
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            style={{ pointerEvents: "auto" }} // ✅ Added
          />
          <InputFieldError field="name" state={state} />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            disabled={pending}
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            style={{ pointerEvents: "auto" }} // ✅ Added
          />
          <InputFieldError field="phone" state={state} />
        </Field>
      </div>

      <div>
        <Field>
          <FieldLabel htmlFor="email">Your Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            disabled={pending}
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            style={{ pointerEvents: "auto" }} // ✅ Added
          />
          <InputFieldError field="email" state={state} />
        </Field>
      </div>

      <div>
        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
            disabled={pending}
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            style={{ pointerEvents: "auto" }} // ✅ Added
          />
          <InputFieldError field="subject" state={state} />
        </Field>
      </div>

      <div>
        <Field>
          <FieldLabel htmlFor="message">Your Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            disabled={pending}
            rows={6}
            className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
            style={{ pointerEvents: "auto" }} // ✅ Added
          />
          <InputFieldError field="message" state={state} />
        </Field>
      </div>

      <div>
        <Button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 neon-border group"
          size="lg"
          style={{ pointerEvents: "auto" }} // ✅ Added
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
