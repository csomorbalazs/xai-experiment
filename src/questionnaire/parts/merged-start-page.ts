const mergedStartPage = {
  elements: [
    {
      maxWidth: "900px",
      type: "html",
      html: `
        <div>
          <p>Welcome to the <b>"XAI Evaluation"</b> Experiment!</p>
          </br>
          <p>
          The experiment is conducted by the <b>Technical University of Berlin at the Quality and Usability Lab</b>. The goal of the study is to gain knowledge about the usefulness of explainability approaches for the use case of fake news detection. Your task will be answering several questions and rate the <b>usefulness of different explanations</b> given by an <b>Artificial Intelligence-System</b> for detecting <b>fake news</b>.
          </p>
          </br>
          <p>
          <b>Duration:</b> approximately <b>30 minutes</b>
          </p>
          </br>
          <p>
          <b>Privacy Statement:</b> Your responses are collected in an anonymized form only. No backtracking to your person and the given responses is possible. You will be asked to create your personal code in the beginning based on several questions. In case you want to delete your responses you can request deleting within one month after participating in the experiment, by sending your personal code. The data gathered in this experiment will be used for scientific publications. In case you have any questions please contact: <a href="mailto:vera.schmitt@tu-berlin.de">vera.schmitt@tu-berlin.de</a>.
          </p>
          </br>
        </div>
    `,
    },
    {
      maxWidth: "900px",
      type: "checkbox",
      name: "confirm",
      title:
        "I have read and understood the information provided above, and I am willing to participate in the study.",
      isRequired: true,
      colCount: 0,
      choices: ["Yes"],
      hideNumber: true,
    },
  ],
};

export default mergedStartPage;
