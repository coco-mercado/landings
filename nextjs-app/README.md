# Instrucciones traer cambios en el servidor
cd /home/ubuntu/landings
git fetch origin
git pull origin master
cd /home/ubuntu/landings/nextjs-app
npm run build
pm2 start npm -- start -- --port 3002