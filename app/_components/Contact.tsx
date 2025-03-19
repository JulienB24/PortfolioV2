"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, MessageCircle, AtSign } from "lucide-react";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_sp3d3vl",
        "template_byhskfr",
        form.current,
        "2A2d8ppKxXrsOBHk0"
      );

      console.log("SUCCÈS !", result.text);
      Swal.fire({
        title: "Message envoyé avec succès !",
        icon: "success",
      });
      resetForm();
    } catch (error: unknown) {
      console.error("ÉCHEC...", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur s'est produite!",
      });
    }
  };

  const resetForm = () => {
    form.current?.reset();
  };

  return (
    <Section>
      {/* Titre */}
      <div className="relative">
        <div className="transform-gpu blur-3xl">
        <div
          className="absolute right-10 opacity-60 -z-50 w-56 h-64 bg-gradient-to-tr from-[#11198c] to-[#2e3fff]"
          style={{
            clipPath:
              "polygon(15% 0%, 75% 0%, 99% 19%, 90% 75%, 25% 100%, 3% 90%)",
          }}
        />
        </div>
      <h2 id="contact"className="font-bold text-4xl lg:text-5xl">Contact Me</h2>
      </div>
      <p className="text-xl text-muted-foreground mt-2 lg:mt-4">
        N’hésitez pas à me contacter, je vous répondrai dès que possible.
      </p>

      {/* Formulaire */}
      <div className="mt-6 rounded-lg text-gray-950 dark:text-white">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Nom et Prénom */}
          <div className="flex items-center p-2  shadow-sm">
            <User className="text-gray-500 mr-2" />
            <Input type="text" name="from_name" placeholder="Nom et Prénom" required />
          </div>

          {/* Téléphone */}
          <div className="flex items-center p-2 shadow-sm">
            <Phone className="text-gray-500 mr-2" />
            <Input type="tel" name="phone" placeholder="Téléphone" required />
          </div>

          {/* Email */}
          <div className="flex items-center rounded-lg p-2 shadow-sm">
            <Mail className="text-gray-500 mr-2" />
            <Input type="email" name="email" placeholder="Adresse mail" required />
          </div>

          {/* Objet */}
          <div className="flex items-center p-2 shadow-sm">
            <AtSign className="text-gray-500 mr-2" />
            <Input type="text" name="object" placeholder="Objet du mail" required />
          </div>

          {/* Message */}
          <div className="flex p-2 shadow-sm">
          <MessageCircle className="text-gray-500 mr-2" />
            <textarea className="bg-background w-full h-40 border rounded-md"  name="object" placeholder="  Votre message" required />
          </div>

          {/* Boutons */}
          <div className="flex justify-center gap-4 mt-4">
            <Button type="submit" className="bg-indigo-700 text-white">
              Envoyer
            </Button>
            <Button type="button" onClick={resetForm} className="bg-pink-950 text-white">
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};
