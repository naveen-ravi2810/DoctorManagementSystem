from flask import jsonify, request
from flask_restful import Resource

from Models.Tables import cur
from flask_jwt_extended import create_access_token

class LoginResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            print(data)
            cur.execute("select * from users where user_name = ? and role = ? and password = ?",(data['name'],data['role'],data['password']))
            user = cur.fetchone()
            if user:
                user_dict = dict(zip(user.keys(), user))
                print(user_dict)
                # access_token = create_access_token(identity=user[])
                return jsonify({"status": True})
            return jsonify({'status':False,'message':'User not found'})
        except Exception as e:
            return jsonify({'status':False,'message':f'Backend error as {e}'})

class RegisterResource(Resource):
    def post(self):
        return jsonify({"status": True})
