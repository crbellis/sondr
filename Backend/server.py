from flask import Flask, request, jsonify, Response, session, g

app = Flask(__name__)

@app.route('/api/updates', methods=["POST"])
def add_to_update_list():
	data = request.json
	email = data["email"]
	print(email)
	return "hello!"
