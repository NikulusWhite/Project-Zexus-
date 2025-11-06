import subprocess
import datetime
import os
import boto3

session = boto3.session.Session()
s3 = session.client(
    service_name='s3',
    endpoint_url='***URL***',
    aws_access_key_id='***ACCESS_KEY***',
    aws_secret_access_key='***SECRET_KEY***'
)


now = datetime.datetime.now()
max_count = 5
counter = open('counter', 'r')
count = counter.read()
counter.close()

backupname = str(now.date()) + "_" + (str(now.time()).split('.')[0]).replace(":", "_") + ".backup"
header = "-- " + str(now.date()) + "_" + str(now.time()).split('.')[0] + "\n"

with open(backupname, "w+") as f:
        a = subprocess.run(["pg_dump", '--dbname', '***CONNECTION URL***'], stdout=f)
        f.close()
file = open(backupname, 'r')

s3.put_object(Bucket='***BUCKET NAME***', Key=f'DB_DUMP_{count}', Body=header+file.read())
file.close()

count = (int(count) + 1) % max_count
counter = open('counter', 'w')
counter.write(str(count))
counter.close()
os.remove(backupname)
