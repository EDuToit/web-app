FROM microsoft/dotnet:latest
COPY . /app
WORKDIR /app
 
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
 
EXPOSE 5001/tcp
ENV ASPNETCORE_URLS http://*:5001
 
ENTRYPOINT ["dotnet", "run"]