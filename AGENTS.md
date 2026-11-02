# Project rules

- Keep BPO contact validation, phone masking, payload construction and response parsing in a shared testable module; this keeps the owner's webhook contract consistent with the form.
- Send BPO contacts directly to the owner's requested webhook, with no duplicate database insert or email notification; the destination owns delivery and server-side validation.