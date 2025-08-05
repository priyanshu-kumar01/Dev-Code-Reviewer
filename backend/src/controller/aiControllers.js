const aiLogic = require("../logics/aiLogic");

module.exports.aiResponse = async(req, res)=>{
    const prompt = req.query.prompt;

    if(!prompt){
        return res.status(400).send("Prompt is required");
    }

    const response = await aiLogic(prompt);

    res.send(response);
}