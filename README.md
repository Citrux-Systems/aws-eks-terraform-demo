
# aws-eks-terraform-demo

Welcome to the Demo for deploy an application in AWS Elastic Kubernetes Services (EKS) using terraform. This is the repository for the Blog [Designing the Ultimate AWS EKS Cluster: A Terraform Blueprint for Success](https://www.citruxdigital.com/blog/designing-the-ultimate-aws-eks-cluster-a-terraform-blueprint-for-success). In the article we cover what is AWS EKS and the steps to execute the code inside this repository explaining some of the code.
## Tech Stack

- Node JS
- Docker
- Kubernetes
- Terraform
- AWS


## Requirements

- To Deploy this project you must first have an AWS account or access to a workspace. [here](http://aws.amazon.com/)

- Install and cofigure AWS CLI including keys

- Intall terraform [here](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

- Install Kubectl [here](https://kubernetes.io/docs/tasks/tools/)
## Deployment

Clone the project

```bash
  git clone https://github.com/Citrux-Systems/aws-eks-terraform-demo.git
```

Go to the project directory

```bash
  cd aws-eks-terraform-demo
```

Go inside terraform folder

```bash
  cd terraform
```

Create the EKS cluster

```bash
  terraform init -upgrade
```

```bash
  terraform plan -out terraform.plan
```

```bash
  terraform apply terraform.plan
```

When the terraform successfully create the eks cluster go to the manifest folder

```bash
  cd ..
  cd raw-manifests
```

Deploy de application inside the cluster using the manifest files

```bash
  kubectl apply -f ingress.yaml,products-service.yaml,products-deployment.yaml,orders-service.yaml,orders-deployment.yaml
```


## Usage/Examples

Run the following to get the ingress endpoint

```bash
kubectl get ingress -n ecommerce
```

In the CLI a table with a column Address will appear. Use the address in the browser to use the deployed App.

http://new-ecommerce-alb-406866228.us-west-2.elb.amazonaws.com/v1/orders

And something similar to this will appear

```json
[
  {
    "id": "1",
    "productId": "1a",
    "orderFor": "Herbert Kelvin Jr.",
    "deliveryAddress": "Asphalt Street",
    "deliveryDate": "02/11/2023",
    "deliveryType": "STANDARD"
  },
  {
    "id": "2",
    "productId": "1b",
    "orderFor": "John Zulu Nunez",
    "deliveryAddress": "Beta Road",
    "deliveryDate": "10/10/2023",
    "deliveryType": "FAST DELIVERY"
  },
  {
    "id": "3",
    "productId": "1c",
    "orderFor": "Lael Fanklin",
    "deliveryAddress": "Charlie Avenue",
    "deliveryDate": "02/10/2023",
    "deliveryType": "STANDARD"
  },
  {
    "id": "4",
    "productId": "1d",
    "orderFor": "Candice Chipilli",
    "deliveryAddress": "Delta Downing View",
    "deliveryDate": "22/09/2023",
    "deliveryType": "FAST DELIVERY"
  },
  {
    "id": "5",
    "productId": "1d",
    "orderFor": "Tedashii Tembo",
    "deliveryAddress": "Echo Complex",
    "deliveryDate": "12/12/2023",
    "deliveryType": "FAST DELIVERY"
  }
]
```
## Authors

- [Citrux Digital](https://www.citruxdigital.com)


## License

[Mozilla Public License Version 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
