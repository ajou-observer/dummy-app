# Node.js의 공식 이미지를 기반으로 합니다. 여기서는 Node 14 버전을 사용합니다.
FROM node:14

# 애플리케이션 소스를 포함할 디렉토리를 생성합니다.
WORKDIR /usr/src/app

# 애플리케이션의 package.json 파일과 package-lock.json 파일(있다면)을 복사합니다.
COPY package*.json ./

# package.json에 정의된 모든 패키지를 설치합니다.
RUN npm install

# 애플리케이션의 소스 코드를 컨테이너 내부로 복사합니다.
COPY . .

# 애플리케이션이 3000 포트에서 수신하도록 설정합니다.
EXPOSE 3000

# 애플리케이션을 실행합니다.
CMD [ "node", "app.js" ]
