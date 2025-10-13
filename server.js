import { profile } from "console";
import express, { response } from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const GITHUB_USER = "meerkatjon";
const GITHUB_REPO = "eShoppingTestAutomation";
const WORKFLOW_FILE = "run-selenium.yml";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.post("/trigger", async (req, res) => {
    const { browser, profile } = req.body;
    const apiUrl = https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/actions/workflows/${WORKFLOW_FILE}/dispatches;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json"
            },
            body: JSON.stringify({
                ref: "main",
                inputs: { browser, profile }
            })

        });
        if (response.ok) {
            res.send(`Workflow triggered for ${browser} - ${profile}`);
        } else {
            const text = await response.text();
            res.status(400).send(`Failed to trigger workflow:<br>${text}`);
        }
    } catch (err) {
        res.status(500).send(`Server error: ${err.message}`);
    }
});

app.listen(10000, () => console.log("Dashboard running on port 10000"));