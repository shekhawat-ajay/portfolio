import { Container } from "@/components";
import { Input, Button, Textarea } from "@/components/ui";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(36, { message: "Name cannot be longer than 36 characters." }),
  email: z.email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(10, { message: "Subject must be at least 10 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const GetInTouch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const promise = async () => {
      const formData = new FormData();
      formData.append(
        "access_key",
        import.meta.env["VITE_WEB3FORMS_PUBLIC_ACCESS_KEY"],
      );

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
    };
  };

  return (
    <Container className="relative max-w-3xl">
      <h2 className="font-heading text-primary mx-auto mt-10 max-w-md pb-10 text-center text-3xl">
        Let's work <span className="text-highlight">together!</span>
      </h2>
      <div className="mx-auto flex max-w-2xs flex-col gap-2 pb-10 sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage /> {/* Error messages appear here */}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your Subject here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="delay-150 hover:bg-green-700 hover:text-white"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-slate-400/5 via-slate-500/30 to-slate-400/5" />
    </Container>
  );
};

export default GetInTouch;
