// async function query(data) {
//     const response = await fetch(
//         "https://mishal23-hotel-backend.hf.space/api/v1/prediction/6ea3ff45-eb56-426b-9baa-f65c85fd125e",
//         {
//             headers: {
//                 Authorization: "Bearer IvVbcGqFsuEctOsj_l5HKsum7mQfkec3rDgPEWW2FQA",
//                 "Content-Type": "application/json"
//             },
//             method: "POST",
//             body: JSON.stringify(data)
//         }
//     );
//     return await response.json();
// }

// async function handleSearch() {
//     const queryInput = document.getElementById('query').value;
//     const resultsBox = document.getElementById('results');

//     if (!queryInput.trim()) {
//         resultsBox.innerHTML = "<p>Please enter a query.</p>";
//         return;
//     }

//     resultsBox.innerHTML = "<p>Searching...</p>"; // Show loading message

//     try {
//         const response = await query({ question: queryInput });

//         // Extract text from response
//         const answer = response.text || "No answer found.";

//         // Display result in a search result style
//         resultsBox.innerHTML = `<p><strong>🔍 Search Result:</strong> ${answer}</p>`;
//     } catch (error) {
//         resultsBox.innerHTML = `<p>Error: ${error.message}</p>`;
//     }
// }
async function query(data) {
    const response = await fetch(
        "https://mishal23-hotel-backend.hf.space/api/v1/prediction/6ea3ff45-eb56-426b-9baa-f65c85fd125e",
        {
            headers: {
                Authorization: "Bearer IvVbcGqFsuEctOsj_l5HKsum7mQfkec3rDgPEWW2FQA",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }
    );
    return await response.json();
}

async function handleSearch() {
    const queryInput = document.getElementById('query').value;
    const resultsBox = document.getElementById('results');

    if (!queryInput.trim()) {
        resultsBox.innerHTML = `<div class="error-message">⚠️ Please enter a query.</div>`;
        return;
    }

    // Show loading animation
    resultsBox.innerHTML = `<div class="loading">⏳ Searching...</div>`;

    try {
        const response = await query({ question: queryInput });

        // Extract answer
        const answer = response.text || "No relevant answer found.";

        // Display result professionally
        resultsBox.innerHTML = `
            <div class="result-card">
                <h3>🔍 Search Result</h3>
                <p>${answer}</p>
            </div>
        `;
    } catch (error) {
        resultsBox.innerHTML = `<div class="error-message">❌ Error: ${error.message}</div>`;
    }
}
