from flask import Flask, jsonify
from main import calculate_lane_priority_and_green_time
import numpy as np
import json
import os

app = Flask(__name__)

def convert_numpy(obj):
    """ Convert numpy types and other non-serializable types to native Python types for JSON serialization. """
    if isinstance(obj, np.float32):
        return float(obj)
    elif isinstance(obj, np.int64):
        return int(obj)
    elif isinstance(obj, np.ndarray):
        return obj.tolist()  # Convert numpy arrays to lists
    elif isinstance(obj, dict):
        return {key: convert_numpy(value) for key, value in obj.items()}  # Handle nested dictionaries
    elif isinstance(obj, list):
        return [convert_numpy(item) for item in obj]  # Handle lists
    elif isinstance(obj, int):
        return obj  # Python int should be JSON serializable
    elif isinstance(obj, float):
        return obj  # Python float should be JSON serializable
    elif isinstance(obj, str):
        return obj  # Strings should be JSON serializable
    else:
        raise TypeError(f"Object of type {type(obj)} is not JSON serializable")
    
@app.route('/Traffic')
def results():
    result = calculate_lane_priority_and_green_time()

    # Convert the result to a JSON-serializable format
    serializable_result = convert_numpy(result)

    # Save the serializable result to a file
    with open('results.txt', 'a') as f:
        f.write(f"{json.dumps(serializable_result)}\n")

    # Return the result as JSON
    return jsonify(serializable_result)

if __name__ == "__main__":
    app.run(debug=True)