# import csv
import os
from os import listdir
from os.path import isfile, join
from pymongo import MongoClient
from datetime import datetime


#assign working directory to variable
file_path=os.getcwd()
print(file_path)
#setting path for data folder
data_path=file_path+'\\'+'uploader\\data'

# extracting file names without extensions
file_names=[".".join(f.split(".")[:-1]) for f in listdir(data_path) if isfile (join(data_path,f))] 
# extracting file names with extensions
full_file_names=[f for f in listdir(data_path) if isfile (join(data_path,f))]
#checking file names and extensions
print(full_file_names)
# print(len(file_names))
fldnm = []
for fl in full_file_names:
    # print(i)
    fldnm.append({"filenam":fl, "fetch_stat":'F', "created_on":datetime.now()})
print(fldnm)


# push data into mongodb
conn = 'mongodb+srv://mrigankasekharsm:ms.sm=22@spectrointgdb.rxk9lid.mongodb.net/?retryWrites=true&w=majority'
client = MongoClient(conn)
db = client["test"]
mycol = db["filelists"]
for fld in fldnm:
    x = mycol.insert_one(fld)
    print(x)
