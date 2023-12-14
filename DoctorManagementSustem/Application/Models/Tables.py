import sqlite3


try :
    conn = sqlite3.Connection("Data/DoctorManagementSystem")
except :
    print("Database Error")