# Project rules

- Keep BPO contact validation, phone masking, payload construction and response parsing in a shared testable module; this keeps the owner's webhook contract consistent with the form.
- Send BPO contacts directly to the owner's requested webhook, with no duplicate database insert or email notification; the destination owns delivery and server-side validation.
- Keep the legacy CFO contact form separate from BPO so BPO-only destination and field changes do not affect CFO leads. The CFO form keeps its database insert and email notification and additionally forwards the lead to the owner's painel webhook with form:"cfo", merging extra fields into "mensagem" as "Campo: valor" lines via the shared module.