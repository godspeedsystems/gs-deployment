
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  buildStrategy: 'buildStrategy',
  type: 'type',
  status: 'status',
  repoUrl: 'repoUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BusinessFunctionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  serviceId: 'serviceId'
};

exports.Prisma.EnvironmentMasterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  manualBuild: 'manualBuild',
  manualDeploy: 'manualDeploy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectEnvironmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  vaultAccessToken: 'vaultAccessToken',
  sonarAccessToken: 'sonarAccessToken',
  environmentMasterId: 'environmentMasterId',
  manualBuild: 'manualBuild',
  manualDeploy: 'manualDeploy',
  hyperBuild: 'hyperBuild',
  clusterId: 'clusterId',
  namespaceId: 'namespaceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceEnvironmentScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  projectEnvironmentId: 'projectEnvironmentId',
  componentId: 'componentId',
  imageName: 'imageName',
  envRoleAccess: 'envRoleAccess',
  manualBuild: 'manualBuild',
  manualDeploy: 'manualDeploy',
  hyperBuild: 'hyperBuild',
  registryId: 'registryId',
  artifactName: 'artifactName',
  projectJobTemplateId: 'projectJobTemplateId',
  templateVersion: 'templateVersion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BuildDetailsScalarFieldEnum = {
  id: 'id',
  gitRepoId: 'gitRepoId',
  typeLabel: 'typeLabel',
  dockerfilePath: 'dockerfilePath',
  depth: 'depth',
  shallowCloning: 'shallowCloning',
  customParameters: 'customParameters',
  buildxPlatform: 'buildxPlatform',
  branchName: 'branchName',
  projectJobTemplateId: 'projectJobTemplateId',
  projectCiScopeId: 'projectCiScopeId',
  sonarProjectKey: 'sonarProjectKey',
  queueName: 'queueName',
  projectEnvironmentId: 'projectEnvironmentId',
  envCiBuildVariable: 'envCiBuildVariable',
  envCiHook: 'envCiHook',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DeploymentScalarFieldEnum = {
  id: 'id',
  serviceName: 'serviceName',
  deploymentName: 'deploymentName',
  deployVariableRawInput: 'deployVariableRawInput',
  deploymentRollbackValidation: 'deploymentRollbackValidation',
  deploymentNames: 'deploymentNames',
  preHookEnabled: 'preHookEnabled',
  postHookEnabled: 'postHookEnabled',
  imagePullPolicy: 'imagePullPolicy',
  resourceKind: 'resourceKind',
  envCdHook: 'envCdHook',
  queueName: 'queueName',
  manifestMetaData: 'manifestMetaData',
  envCdDeploymentStrategy: 'envCdDeploymentStrategy',
  envCdDeployVariable: 'envCdDeployVariable',
  projectEnvironmentId: 'projectEnvironmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClusterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NamespaceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RegistryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VmGroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.BuildStrategy = exports.$Enums.BuildStrategy = {
  ONCE: 'ONCE',
  EVERY: 'EVERY'
};

exports.ServiceType = exports.$Enums.ServiceType = {
  MICROSERVICE: 'MICROSERVICE'
};

exports.ServiceStatus = exports.$Enums.ServiceStatus = {
  Approved: 'Approved',
  Approved_Pending: 'Approved_Pending'
};

exports.ImagePullPolicy = exports.$Enums.ImagePullPolicy = {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never'
};

exports.ResourceKind = exports.$Enums.ResourceKind = {
  job: 'job',
  deployment: 'deployment',
  statefulset: 'statefulset'
};

exports.Prisma.ModelName = {
  User: 'User',
  Project: 'Project',
  Service: 'Service',
  BusinessFunction: 'BusinessFunction',
  EnvironmentMaster: 'EnvironmentMaster',
  ProjectEnvironment: 'ProjectEnvironment',
  ServiceEnvironment: 'ServiceEnvironment',
  BuildDetails: 'BuildDetails',
  Deployment: 'Deployment',
  Cluster: 'Cluster',
  Namespace: 'Namespace',
  Registry: 'Registry',
  VmGroup: 'VmGroup'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
