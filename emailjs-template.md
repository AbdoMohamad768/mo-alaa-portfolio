# EmailJS template for portfolio contact form

Use this in the **EmailJS Dashboard** → **Email Templates** when creating or editing your template. Your form sends these variables: `name`, `email`, `message`.

---

## Subject line (template setting)

```
New message from {{name}} — Portfolio contact
```

Or simpler:

```
Portfolio contact: {{name}}
```

---

## Plain text body

Copy this into the **Content** field if you use a plain-text template:

```
New message from your portfolio contact form
--------------------------------------------

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent via EmailJS from your portfolio.
```

---

## HTML body (for rich email)

Use this if your EmailJS template supports HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio contact</title>
</head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1e293b; max-width: 560px; margin: 0 auto; padding: 24px;">
  <h2 style="margin: 0 0 16px; font-size: 1.25rem;">New message from your portfolio</h2>
  <p style="margin: 0 0 8px;"><strong>From:</strong> {{name}}</p>
  <p style="margin: 0 0 16px;"><strong>Email:</strong> {{email}}</p>
  <div style="margin: 16px 0; padding: 16px; background: #f1f5f9; border-radius: 8px;">
    <p style="margin: 0 0 8px; font-weight: 600;">Message:</p>
    <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
  </div>
  <p style="margin: 24px 0 0; font-size: 0.875rem; color: #64748b;">Sent via your portfolio contact form.</p>
</body>
</html>
```

---

## Variable reference

| Variable  | Form field | Description        |
|-----------|------------|--------------------|
| `{{name}}`  | `name`     | Sender’s name      |
| `{{email}}` | `email`   | Sender’s email     |
| `{{message}}` | `message` | Message content |

In EmailJS you reference them exactly as `{{name}}`, `{{email}}`, `{{message}}` (or whatever your dashboard uses, e.g. `{{ name }}`).

---

## Quick checklist

1. In EmailJS: **Email Templates** → Create or edit template.
2. Set **Subject** (e.g. `Portfolio contact: {{name}}`).
3. Set **Content** to one of the bodies above (plain text or HTML).
4. Ensure **To Email** is your receiving address.
5. Save and use the template ID in your app (e.g. `template_ceuxoy6`).
