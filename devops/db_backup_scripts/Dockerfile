FROM python:3.9-slim

WORKDIR /app

COPY backup.py .
COPY pg_dump .
RUN chmod +x pg_dump
COPY counter .
COPY ./ssl-key ./ssl-key
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && apt-get install -y libpq5
CMD ["python3", "backup.py"]
