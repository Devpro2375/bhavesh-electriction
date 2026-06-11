type EnquiryPayload = {
  name?: unknown;
  phone?: unknown;
  area?: unknown;
  service?: unknown;
  message?: unknown;
  company?: unknown;
};

const whatsappPhone = "917798979678";

function cleanText(value: unknown, maxLength = 160) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    if (cleanText(body.company)) {
      return Response.json({
        ok: true,
        message: "Enquiry तयार झाली.",
        whatsappUrl: `https://wa.me/${whatsappPhone}`,
      });
    }

    const name = cleanText(body.name, 80);
    const phone = cleanText(body.phone, 24);
    const area = cleanText(body.area, 120) || "Area सांगितलेला नाही";
    const service = cleanText(body.service, 120);
    const message =
      cleanText(body.message, 500) || "Problem details फोनवर सांगतो.";

    if (!name) {
      return Response.json({ ok: false, message: "नाव टाका." }, { status: 400 });
    }

    if (!/^[0-9+\-\s()]{7,24}$/.test(phone)) {
      return Response.json(
        { ok: false, message: "मोबाइल नंबर नीट टाका." },
        { status: 400 },
      );
    }

    if (!service) {
      return Response.json(
        { ok: false, message: "Service निवडा." },
        { status: 400 },
      );
    }

    const whatsappMessage = [
      "नमस्कार Bhaavesh Electrician,",
      "",
      `नाव: ${name}`,
      `फोन: ${phone}`,
      `Area: ${area}`,
      `काम: ${service}`,
      `Problem: ${message}`,
      "",
      "कृपया timing आणि अंदाज सांगा.",
    ].join("\n");

    return Response.json({
      ok: true,
      message: "Enquiry तयार झाली. WhatsApp वर पाठवा किंवा थेट फोन करा.",
      whatsappUrl: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
    });
  } catch {
    return Response.json(
      { ok: false, message: "Request वाचता आली नाही. थेट फोन करा." },
      { status: 400 },
    );
  }
}
