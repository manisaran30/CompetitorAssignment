---

```markdown
# 🕵️ Competitor Intelligence Tool for Enterprise Sales

This project automates the process of identifying competitors of a company (e.g., Infosys) that have existing or past partnerships with a target company (e.g., Virgin Media). 

Without this tool, sales analysts would manually search for these connections, read articles, and compile results. This tool uses SerpAPI and Node.js to streamline that process, saving time and improving accuracy.

---

## 🔧 How It Works

- Takes two inputs:  
  1. `customer` – the company seeking to collaborate (e.g., Infosys)  
  2. `target` – the company being researched (e.g., Virgin Media)

- Automatically finds competitors of the customer using SerpAPI search.

- For each competitor, it queries SerpAPI to check for public web results (news/articles/PRs) showing partnerships with the target company.

- Outputs the results in a structured `partnerships.json` file with the following format:

```json
[
  {
    "competitor": "TCS",
    "title": "Virgin Media partners with TCS to modernize IT operations",
    "link": "https://example.com/virgin-media-tcs-deal",
    "snippet": "TCS will help Virgin Media digitize its customer operations through a new 3-year contract..."
  },
  ...
]
```

---

📁 Files

- `bing.js`: Main script that:
  - Finds competitors
  - Performs partnership searches
  - Saves data to `partnerships.json`

- `partnerships_analysis.json`: Output file containing the final intelligence report.

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/manisaran30/CompetitorAssignment.git
cd CompetitorAssignment
```

2. Install dependencies

```bash
npm install axios dotenv
```


> You can get a free API key by signing up at https://serpapi.com

### 4. Run the script

```bash
node competitor_spy.js
```

---

✅ Output

The script will generate `partnerships_analysis.json` in the root folder with competitor insights.

---

📌 Use Case

This tool is ideal for:
- Enterprise sales teams
- Analyst teams
- Competitive intelligence researchers

Instead of manually Googling, just run the script and get a clean competitor-partnership report.

---

🧠 Example

If Infosys is targeting Virgin Media, this tool might reveal:

- TCS partnered with Virgin Media on cloud transformation
- Wipro handled past IT infrastructure projects for Virgin Media

Infosys can now craft a personalized pitch based on Virgin Media's previous vendor experiences.

---

💡 Future Improvements

- Add UI to visualize results
- Export to CSV/PDF
- Support custom competitor lists

---

📞 Contact

Feel free to reach out for improvements or suggestions:
[GitHub: @manisaran30](https://github.com/manisaran30)

---

```

Let me know if you'd like a version of this README tailored for a website with HTML/JS or if you want to convert this output to CSV as well.
