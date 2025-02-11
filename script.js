async function query(data) {
    const response = await fetch(
        "https://mishalzubair-flowise.hf.space/api/v1/prediction/697c9743-48e5-4797-b58f-ff9b46254fab",
        {
            headers: {
                Authorization: "Bearer kJjIn__lqkgM2NWyoPwHd6tew6Uph_1gjecY478ss38",
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
        resultsBox.innerHTML = "<p>Please enter a query.</p>";
        return;
    }

    resultsBox.innerHTML = "<p>Searching...</p>"; // Show loading message

    try {
        const response = await query({ question: queryInput });

        // Extract text from response
        const answer = response.text || "No answer found.";

        // Display result in a search result style
        resultsBox.innerHTML = `<p><strong>🔍 Search Result:</strong> ${answer}</p>`;
    } catch (error) {
        resultsBox.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
