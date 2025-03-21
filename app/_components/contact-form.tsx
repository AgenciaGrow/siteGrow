"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: CheckedState) => {
    setFormData((prev) => ({ ...prev, consent: checked === true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Por favor, concorde com os termos antes de enviar.");
      return;
    }

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    console.log("Endpoint:", formspreeEndpoint);
    if (!formspreeEndpoint) {
      setError("Erro de configuração: ENDPOINT não definido.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          consent: false,
        });
      } else {
        setError("Erro ao enviar o email. Por favor, tente novamente.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Erro ao enviar o email. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:mr-36">
      <div className="mt-10">
        <label
          htmlFor="name"
          className="block text-sm md:mr-52 text-gray-400 mb-1"
        >
          Nome
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
          Telefone
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-gray-400 mb-1">
          Empresa
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
          Conte um pouco sobre seu projeto
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={handleCheckboxChange}
          className="data-[state=checked]:bg-[#FFCC00]"
        />
        <label htmlFor="consent" className="text-xs text-gray-400">
          Concordo com os termos
        </label>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#FFCC00] hover:bg-[#FFCC00] text-gray-900 font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>

      {isSuccess && (
        <p className="text-green-500 text-sm mt-2">
          Email enviado com sucesso!
        </p>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
}
