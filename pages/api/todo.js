import client from "../../sanity/client";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            //this JSON arrives as a string,
            //so we turn it into a JS object with JSON.parse()
            const newTodo = await req.body;
            //then use the Sanity client to create a new todo doc
            try {
                await client
                    .create({
                        _type: "todo",
                        text: newTodo.text,
                        isCompleted: false,
                        createdAt: new Date().toISOString(),
                        userEmail: newTodo.user,
                    })
                    .then((res) => {
                        console.log(`Todo was created, document ID is ${res._id}`);
                    });
                res.status(200).json({ msg: `Todo was created, document ID is ${res._id}` });
            } catch (err) {
                console.error(err);
                res.status(500).json({ msg: "Error, check console" });
            }
            break;
        case "PUT":
            const result = await client
                .patch(req.body.id)
                .set({
                    isCompleted: !req.body.isCompleted,
                })
                .commit();
            res.status(200).json({
                status: result.isCompleted,
            });

            break;
        case "DELETE":
            await client
                .delete(req.body._id)
                .then((res) => {
                    res.body;
                })
                .then((res) => console.log(`Todo was deleted`));
            res.status(200).json({ msg: "Success" });
            break;
        
    }
}