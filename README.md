Kubernetes Task Documentation
Objective:
Deploy a distributed application with authentication and authorization policies using Kubernetes, Docker, and OPA (Open Policy Agent).



Files Involved:
Dockerfile, Dockerfile1: Defines the Docker images for the application and its components.
app.py, app.js: Application code files for the services (e.g., backend logic in app.py and frontend in app.js).
authz. rego, opa-policy.yaml: OPA policy files that define authorization rules using Rego language.
gigabyte-db.yaml, gigabyte-deployment.yaml,yugabyte-minikube.yaml, yugabyte.yaml: YugabyteDB configuration files are used to set up the database service in Kubernetes.
service-a-deployment.yaml, service-b-deployment.yaml: Kubernetes Deployment files are used to deploy Service A and Service B.
service-a-service.yaml, service-b-service.yaml: Kubernetes Service files for exposing Service A and Service B to the network.
apisix-crds.yaml, apisix-route.yaml: APISIX configurations for setting up routes and custom resources.
Ikeda-scaled object.yaml: Configuration for KEDA to scale services based on metrics.
requirements.txt: Dependencies for Python application (app.py).
package.json, package-lock.json, node_modules: Frontend dependencies for the Node.js application (app.js).
db.js: Database connection and management file for the application.



Steps Taken:
Built the Docker Images:

Dockerfile and Dockerfile1 were created to build the Docker images for the backend (Python app) and frontend (Node.js app).
Ran docker build -t <image-name> . to create images for each service.
Set Up YugabyteDB (Database):

Used gigabyte-db.yaml and gigabyte-deployment.yaml to configure and deploy YugabyteDB to the Kubernetes cluster.
Ensured the database was accessible via the Kubernetes service and configured it using kubectl apply -f gigabyte.yaml.
Created Kubernetes Deployments and Services:

service-a-deployment.yaml and service-b-deployment.yaml was created to define the deployments for Service A and Service B, specifying the Docker images and environment variables.
Applied these using kubectl apply -f service-a-deployment.yaml and kubectl apply -f service-b-deployment.yaml.
Exposed the services using service-a-service.yaml and service-b-service.yaml for internal communication within the cluster.
Set Up APISIX Routing:

apisix-crds.yaml and apisix-route.yaml configured APISIX as an API Gateway for routing traffic to the deployed services.
Defined the routing rules for Service A and Service B.
Implemented Authentication and Authorization (OPA):

Created opa-deployment.yaml to deploy the OPA (Open Policy Agent) as a service in Kubernetes.
Configured authz.rego to define authorization rules for access control.
Applied opa-policy.yaml to bind the policy with the OPA service, ensuring that requests to the services are authorized correctly.
Scaled Services Using KEDA:

Created keda-scaledobject.yaml to define the scaling rules for Service A and Service B based on custom metrics.
Applied the scaling configuration using kubectl apply -f keda-scaledobject.yaml.
Tested the Application:

After deploying the services, I accessed the application by routing traffic through APISIX.
Ensured that the services interacted correctly, the database was connected, and the authorization rules were enforced via OPA.

Conclusion:
The task was completed by deploying the application and database on Kubernetes, configuring APISIX for routing, and implementing authorization policies using OPA. The services were also scaled dynamically based on traffic.

