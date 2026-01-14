// Node 18+ has global fetch
// Note: Node 18+ has global fetch.

async function checkEndpoint(name, url) {
    try {
        console.log(`Checking ${name} at ${url}...`);
        const res = await fetch(url);
        console.log(`Status: ${res.status} ${res.statusText}`);
        if (!res.ok) {
            try {
                const json = await res.json();
                console.log('Error Body:', JSON.stringify(json, null, 2));
            } catch (e) {
                console.log('Could not parse error body');
            }
        } else {
            const json = await res.json();
            console.log('Success. Data keys:', Object.keys(json));
            if (json.data) console.log('Data found:', !!json.data);
            if (Array.isArray(json.data)) console.log('Data count:', json.data.length);
        }
    } catch (err) {
        console.error(`Failed to connect to ${name}:`, err.message);
    }
    console.log('---');
}

async function run() {
    console.log("Testing base connectivity...");
    await checkEndpoint('Root', 'http://127.0.0.1:1337');
    console.log("\nTesting API endpoints...");
    await checkEndpoint('Global (No params)', 'http://127.0.0.1:1337/api/global');
    await checkEndpoint('Global (With Populate)', 'http://127.0.0.1:1337/api/global?populate=*');
    await checkEndpoint('Pages', 'http://127.0.0.1:1337/api/pages');
}

run();
