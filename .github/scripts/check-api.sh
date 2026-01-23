for i in {1..30}; do
  echo "checking /health [$i/30]"
  if curl -sf https://tau-github-actions-practice.onrender.com/health; then
    echo "Service is ready"
    exit 0
  fi
  sleep 10
done
echo "Service did not become ready"
exit 1