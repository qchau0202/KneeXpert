# KneeXpert

This research presents **KneeXpert**, a **dual-modality AI clinical decision support system** operating under a **Human-in-the-Loop (HITL)** architecture. The system implements two parallel analytical tracks:

* **X-ray Pipeline:** Combines a **CNN ensemble** (**ResNet-50**, **ResNet-101**, **DenseNet-201**, **VGG-19**) with **soft-voting** and **Grad-CAM explainability** for automated **KL grading**.
* **MRI Pipeline:** A two-stage pipeline combining **MACS-Net artifact removal** (trained on **KMAR-50K**) with a **DeiT-Small Vision Transformer** classifier (trained on **SKM-TEA**) for **16-category soft-tissue pathology detection**.

Both tracks are unified through a **RAG-grounded local LLM** (**MEDITRON** via **Ollama**) with a **TruLens safety gate** enforcing a groundedness threshold of **τ = 0.85**, and a **web-based diagnostic portal** that routes all AI outputs as advisory inputs subject to **mandatory physician sign-off** before commitment to the patient record.

## Project Logo
<div style="text-align: center;">
    <img src="/public/kneexpert-textlogo.png" width="300" alt="KneeXpert Logo"/>
</div>

## Project Demo
[<video src="[/public/KneeXpert-demo.mp4](https://github.com/user-attachments/assets/da4fad0f-867f-45b8-8b34-09eb05704e6f)" width="100%" controls></video>](https://github.com/user-attachments/assets/da4fad0f-867f-45b8-8b34-09eb05704e6f)

## Showcase
Navigate using this [**link**](https://knee-xpert-showcase.vercel.app/) to open the showcase website, or scan the QR code below:
<div style="text-align: center;">
    <img src="/public/showcase-qr.png" width="300" alt="KneeXpert Showcase QR"/>
</div>
