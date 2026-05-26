from flask import Flask, request, jsonify
import pandas as pd
from xgboost import XGBClassifier
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

# Load model
model = XGBClassifier()
model.load_model('xgboost_model.json')

# Defining the expected features that were used during model training
all_features = [
    'experience_years', 'AWS', 'CI/CD', 'CSS', 'Dart', 'Docker', 'Firebase', 'Flutter', 'HTML',
    'Java', 'JavaScript', 'Kotlin', 'Kubernetes', 'Linux', 'Machine Learning', 'Microservices', 'Pandas', 
    'Python', 'REST', 'React', 'React Native', 'Redux', 'SQL', 'Spring', 'Statistics', 'Swift', 'TensorFlow',
    'Terraform', 'TypeScript', 'job_role_Backend Developer', 'job_role_Data Scientist', 
    'job_role_DevOps Engineer', 'job_role_Frontend Developer', 'job_role_Mobile Developer'
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        input_data = request.get_json()

        # Ensure all features are in the input data 
        missing_columns = set(all_features) - set(input_data.keys())
        for col in missing_columns:
            input_data[col] = 0 

        # Create DataFrame from input_data
        inputs = pd.DataFrame([input_data])

        # Reindex to match the model's expected features 
        inputs = inputs.reindex(columns=all_features, fill_value=0)

        # Get prediction from the model
        prediction = model.predict(inputs)[0]
        probability = model.predict_proba(inputs)[0][1]

        # Return prediction and probability as JSON response
        response = {
            'shortlisted': int(prediction),
            'probability': round(float(probability), 8)
        }
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

