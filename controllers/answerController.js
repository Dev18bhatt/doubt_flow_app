
const answermodel = require('../models/answer.model.js');
const questionsModel = require('../models/questions.model.js');

const addAnswer = async (req, res) => {


    // const { id: _id } = req.params;

    console.log('value of id ', req.params.id);

    const userId = req.user.id; // Assuming middleware sets `req.user`
    const { title, body } = req.body;

    try {
        // Check if the question exists
        const question = await questionsModel.findById(req.params.id);
        if (!question) {
            return res.status(404).send({ message: "Question not found..." });
        }

        // Create the new answer
        const newAnswer = await answermodel.create({
            questionId: req.params.id,
            author: userId,
            title,
            body
        });

        console.log(newAnswer);
        res.status(201).send({
            message: "Answer added Successfully",
            ansBody: newAnswer,
        });
    } catch (error) {
        console.error("Error adding answer:", error);
        res.status(500).send({ message: "Something went wrong. Please try again later." });
    }
};

const getAnswers = async (req, res) => {
    const { questionId } = req.params;
    try {
        console.log(questionId);
        const answer = await answermodel.find({ questionId: req.params.id }).populate('author');
        if (answer.length === 0) {
            return res.status(404).send({ message: "No answer  found for this question..." });
        }

        res.status(200).send({ message: "Answer fetched Successfully...", answer });

    }
    catch (err) {
        console.log(err);

        res.status(500).send({ message: "Something went wrong. Please try again later." });
    }
}


module.exports = { addAnswer, getAnswers };