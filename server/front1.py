from flask import Flask,jsonify
from accident import detect

app=Flask(__name__)

@app.route('/accident_detect')
def ac_detect():
    result=detect()
    with open('result.txt','a') as f:
        return(result)

if __name__ == "__main__":
    app.run(debug=True)