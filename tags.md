# Linkarooie Tags Upgrade

Tags should actually do something so this is how I would change it.

## **Tag Structure**

Each **tag** should include:

1. **Tag Name** _(required)_

   - This is the core tag, and it should behave exactly as it does now.

2. **Tag Description** _(optional)_

   - A brief explanation of what the tag represents.

3. **Tag Description Citation** _(optional, but requires a URL if present)_

   - **Title** _(optional but required if citation exists)_ – The name of the source.
   - **URL** _(required if citation exists)_ – The link to the source.

4. **Related Work** _(optional, can be one or many)_
   - **Title** _(required if related work exists)_ – The title of the work.
   - **URL** _(required if related work exists)_ – A link to the work.
   - **Description** _(required if related work exists)_ – A short description of the work.

---

### **Functionality**

- **If only the Tag Name is present** → It behaves exactly as it does now.
- **If a Tag Description is present** → It appears when hovering over or clicking the tag.
- **If a Tag Description Citation is present** → The citation (title + link) appears within the hover/click popup.
- **If Related Work exists** → A list of related work (title, URL, description) is displayed in the popup.

---

### **Example Data Representation**

```json
{
  "tags": [
    {
      "name": "DevOps",
      "description": "A set of practices that combines software development and IT operations.",
      "citation": {
        "title": "DevOps - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DevOps"
      },
      "related_work": [
        {
          "title": "DevOps Automation Scripts",
          "url": "https://github.com/DeanLofts/devops-automation",
          "description": "A collection of automation scripts for managing cloud infrastructure."
        }
      ]
    },
    {
      "name": "AI",
      "description": "Artificial Intelligence is the simulation of human intelligence in machines.",
      "citation": {
        "title": "Artificial Intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Artificial_intelligence"
      },
      "related_work": [
        {
          "title": "AI Chatbot Project",
          "url": "https://github.com/DeanLofts/ai-chatbot",
          "description": "An open-source AI chatbot with NLP capabilities."
        },
        {
          "title": "AI Research Article",
          "url": "https://medium.com/@deanlofts/ai-research",
          "description": "A deep dive into modern AI architectures."
        }
      ]
    }
  ]
}
```

---

### **Display Logic**

- **Default (Tag Only)** → No additional functionality beyond current behavior.
- **With Description** → Shown on hover/click.
- **With Citation** → Displayed with description.
- **With Related Work** → Shown as a list under description/citation.

#### **Example UI Behavior**

When **hovering over "DevOps"**, the popup might show:

> **DevOps**  
> A set of practices that combines software development and IT operations.  
> 📖 **DevOps - Wikipedia** [(view)](https://en.wikipedia.org/wiki/DevOps)  
> 🛠 **Related Work:**
>
> - **[DevOps Automation Scripts](https://github.com/DeanLofts/devops-automation)**  
>   _A collection of automation scripts for managing cloud infrastructure._

---

## **Final Thoughts**

This design ensures:

- **Backward compatibility** (tags work as they do now if no extra info is added).
- **Progressive enhancement** (extra data adds depth but isn’t required).
- **Scalability** (multiple related works per tag).
- **Intuitive display behavior** (hover/click reveals extra details).
