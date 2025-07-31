from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    return f"Hello, {name}! Data received successfully."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
