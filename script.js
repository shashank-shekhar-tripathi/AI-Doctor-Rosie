const API_KEY = "AIzaSyDd5pVlOfMw9nDIx0L-Txdix5aotMlkgi0";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

async function getGeminiResponse(issue,data) {
    const prompt = `"Create a health suggestion with data: Name: ${data.name}, Gender: ${data.gender}, Age: ${data.age}, symptoms :${issue}. make it brief and don't include unnessary details just give me probable reasons, consequnces and required medication. don't use ** for bold"`
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();
    console.log(data.candidates[0].content.parts[0].text);
    alert(data);
}

function auth (){
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const data = {
        'name':name,
        'age':age,
        'gender':gender
    };
    console.log(data)
}

// getGeminiResponse();
