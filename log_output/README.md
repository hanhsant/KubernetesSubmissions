LOG_OUTPUT SPLIT INTO TWO

# Deploy pv and pvc
cd cluster_resources/manifests
kubectl apply -f PersistentVolume.yaml
kubectl apply -f PersistentVolumeClaim.yaml

# Deploy ping-pong application
cd ../../ping-pong/manifests
kubectl apply -f .

# Deploy log output application
cd ../../log_output/manifests
kubectl apply -f .


**Expected Response:**
```json
{
  "timestamp": "2025-07-31T12:00:36.186Z",
  "randomString": "60c03382-c2ff-49c0-9ce0-6a5cfd908c4a",
  "Ping / Pongs": 2
}