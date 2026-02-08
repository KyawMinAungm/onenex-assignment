"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";
import FloatingInput from "@/components/FloatingInput";

// Validation Rules
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().optional(), // Optional field
  phone: z.string().min(7, "Phone number is required").max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(1, "Tell us  about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data:", data);
    // ဥပမာ - API ပို့တာမျိုး ဒီမှာ လုပ်လို့ရပါတယ်
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center  py-24">
      <div className="max-w-7xl px-6 lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Header */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl/relaxed  tracking-tighter ">
            We&apos;re ready if you are. Let&apos;s get to it
          </h1>
        </div>

        {/* Right Side: Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="font-sharp text-gray-500">
            <FloatingInput
              id="name"
              label="Name"
              error={errors.name}
              {...register("name")}
            />

            <FloatingInput
              id="business"
              label="Business (Optional)"
              {...register("business")}
            />

            <FloatingInput
              id="phone"
              label="Phone"
              type="tel"
              error={errors.phone}
              {...register("phone")}
            />
            <FloatingInput
              id="email"
              label="Email"
              type="email"
              error={errors.email}
              {...register("email")}
            />

            <FloatingInput
              id="project"
              label="Tell us about your project"
              error={errors.project}
              {...register("project")}
            />

            <button type="submit" disabled={isSubmitting} className="w-full">
              <Button className="ms-auto" label={`${isSubmitting ? "Sending..." : "Send"}`} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
