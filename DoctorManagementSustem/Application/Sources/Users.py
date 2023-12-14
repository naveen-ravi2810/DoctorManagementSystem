from flask_restful import Resource
from flask import jsonify, request
from Models.Tables import conn
class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        conn.cursor("select * from users where name = %s",(data.name))
        user = conn.fetchone()
        print(user)
        return jsonify({"status": True})


class RegisterResource(Resource):
    def post(self):
        return jsonify({"status": True})
