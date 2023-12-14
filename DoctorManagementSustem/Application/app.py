from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from Sources.Users import LoginResource, RegisterResource
from Sources.Doctors import DoctorResource, DoctorsResource

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(LoginResource,'/login')
api.add_resource(RegisterResource,'/register')
api.add_resource(DoctorsResource,'/doctor')
api.add_resource(DoctorResource,'/doctor/<string:id>')

if __name__ == "__main__":
    app.run(debug=True)
