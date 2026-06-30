export class Reader {

    static async start(workSlug, chapter) {

        console.log("Reader initialized.");

        const container = document.getElementById("reader-container");

        if (!container) {
            throw new Error("Missing #reader-container");
        }

        container.innerHTML = `
            <div class="reader">

                <h2>${workSlug}</h2>

                <p>${chapter}</p>

            </div>
        `;

    }

}
