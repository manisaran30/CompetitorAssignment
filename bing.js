const axios = require('axios');
const fs = require('fs');

const serpApiKey = '789ad045f6dcfa630c53976ae42f57b46d2b07b06f743b82b1154e71a35d39c8';
const targetCompany = 'Virgin Media';

// Step 1: Get competitors dynamically
async function fetchCompetitors(companyName) {
    const query = `${companyName} competitors list`;

    const response = await axios.get('https://serpapi.com/search', {
        params: {
            q: query,
            engine: 'google',
            api_key: serpApiKey
        }
    });

    const snippets = response.data.organic_results?.map(r => r.snippet || '') || [];

    const allText = snippets.join(' ');
    const matches = allText.match(/\b([A-Z][a-z]+(?:\s[A-Z][a-z]+){0,2})\b/g) || [];

    const possibleCompanies = Array.from(new Set(matches)).filter(name =>
        name !== companyName &&
        !['Inc', 'Ltd', 'LLC', 'Company', 'Group'].includes(name)
    );

    return possibleCompanies.slice(0, 10); // Limit to top 10
}

// Step 2: For each competitor, check Virgin Media partnership
async function checkPartnerships(competitors) {
    let results = [];

    for (let competitor of competitors) {
        const query = `"${targetCompany}" "${competitor}" partnership OR collaboration OR deal`;

        try {
            const response = await axios.get('https://serpapi.com/search', {
                params: {
                    q: query,
                    engine: 'google',
                    api_key: serpApiKey,
                    num: 5
                }
            });

            const organicResults = response.data.organic_results || [];

            organicResults.forEach(article => {
                results.push({
                    Competitor: competitor,
                    Title: article.title,
                    Link: article.link,
                    Snippet: article.snippet || ''
                });
            });

            await new Promise(r => setTimeout(r, 1500)); // prevent rate-limit

        } catch (err) {
            console.error(`Error for ${competitor}:`, err.message);
        }
    }

    return results;
}

// Save results to json
function saveToJSON(results) {
    const filePath = 'partnership_analysis.json';
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    console.log(`✅ Saved results to ${filePath}`);
}


// Run full process
(async () => {
    console.log('🔍 Finding competitors of Infosys...');
    const competitors = await fetchCompetitors('Infosys');
    console.log('✅ Found competitors:', competitors);

    console.log('🔍 Searching for partnerships...');
    const results = await checkPartnerships(competitors);

    saveToJSON(results);
})();
