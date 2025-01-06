
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model EnvironmentMaster
 * 
 */
export type EnvironmentMaster = $Result.DefaultSelection<Prisma.$EnvironmentMasterPayload>
/**
 * Model ProjectEnvironment
 * 
 */
export type ProjectEnvironment = $Result.DefaultSelection<Prisma.$ProjectEnvironmentPayload>
/**
 * Model ServiceEnvironment
 * 
 */
export type ServiceEnvironment = $Result.DefaultSelection<Prisma.$ServiceEnvironmentPayload>
/**
 * Model BuildDetails
 * 
 */
export type BuildDetails = $Result.DefaultSelection<Prisma.$BuildDetailsPayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model Cluster
 * 
 */
export type Cluster = $Result.DefaultSelection<Prisma.$ClusterPayload>
/**
 * Model Namespace
 * 
 */
export type Namespace = $Result.DefaultSelection<Prisma.$NamespacePayload>
/**
 * Model Registry
 * 
 */
export type Registry = $Result.DefaultSelection<Prisma.$RegistryPayload>
/**
 * Model VmGroup
 * 
 */
export type VmGroup = $Result.DefaultSelection<Prisma.$VmGroupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BuildStrategy: {
  ONCE: 'ONCE',
  EVERY: 'EVERY'
};

export type BuildStrategy = (typeof BuildStrategy)[keyof typeof BuildStrategy]


export const ServiceType: {
  MICROSERVICE: 'MICROSERVICE'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const ServiceStatus: {
  Approved: 'Approved',
  Approved_Pending: 'Approved_Pending'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const ImagePullPolicy: {
  Always: 'Always',
  IfNotPresent: 'IfNotPresent',
  Never: 'Never'
};

export type ImagePullPolicy = (typeof ImagePullPolicy)[keyof typeof ImagePullPolicy]


export const ResourceKind: {
  job: 'job',
  deployment: 'deployment',
  statefulset: 'statefulset'
};

export type ResourceKind = (typeof ResourceKind)[keyof typeof ResourceKind]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BuildStrategy = $Enums.BuildStrategy

export const BuildStrategy: typeof $Enums.BuildStrategy

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type ImagePullPolicy = $Enums.ImagePullPolicy

export const ImagePullPolicy: typeof $Enums.ImagePullPolicy

export type ResourceKind = $Enums.ResourceKind

export const ResourceKind: typeof $Enums.ResourceKind

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.environmentMaster`: Exposes CRUD operations for the **EnvironmentMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentMasters
    * const environmentMasters = await prisma.environmentMaster.findMany()
    * ```
    */
  get environmentMaster(): Prisma.EnvironmentMasterDelegate<ExtArgs>;

  /**
   * `prisma.projectEnvironment`: Exposes CRUD operations for the **ProjectEnvironment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectEnvironments
    * const projectEnvironments = await prisma.projectEnvironment.findMany()
    * ```
    */
  get projectEnvironment(): Prisma.ProjectEnvironmentDelegate<ExtArgs>;

  /**
   * `prisma.serviceEnvironment`: Exposes CRUD operations for the **ServiceEnvironment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceEnvironments
    * const serviceEnvironments = await prisma.serviceEnvironment.findMany()
    * ```
    */
  get serviceEnvironment(): Prisma.ServiceEnvironmentDelegate<ExtArgs>;

  /**
   * `prisma.buildDetails`: Exposes CRUD operations for the **BuildDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuildDetails
    * const buildDetails = await prisma.buildDetails.findMany()
    * ```
    */
  get buildDetails(): Prisma.BuildDetailsDelegate<ExtArgs>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **Deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.DeploymentDelegate<ExtArgs>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs>;

  /**
   * `prisma.namespace`: Exposes CRUD operations for the **Namespace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Namespaces
    * const namespaces = await prisma.namespace.findMany()
    * ```
    */
  get namespace(): Prisma.NamespaceDelegate<ExtArgs>;

  /**
   * `prisma.registry`: Exposes CRUD operations for the **Registry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registries
    * const registries = await prisma.registry.findMany()
    * ```
    */
  get registry(): Prisma.RegistryDelegate<ExtArgs>;

  /**
   * `prisma.vmGroup`: Exposes CRUD operations for the **VmGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VmGroups
    * const vmGroups = await prisma.vmGroup.findMany()
    * ```
    */
  get vmGroup(): Prisma.VmGroupDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Service: 'Service',
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "project" | "service" | "environmentMaster" | "projectEnvironment" | "serviceEnvironment" | "buildDetails" | "deployment" | "cluster" | "namespace" | "registry" | "vmGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentMaster: {
        payload: Prisma.$EnvironmentMasterPayload<ExtArgs>
        fields: Prisma.EnvironmentMasterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentMasterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentMasterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentMasterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentMasterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          findMany: {
            args: Prisma.EnvironmentMasterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>[]
          }
          create: {
            args: Prisma.EnvironmentMasterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          createMany: {
            args: Prisma.EnvironmentMasterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentMasterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentMasterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          update: {
            args: Prisma.EnvironmentMasterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentMasterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentMasterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnvironmentMasterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentMasterPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentMasterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentMaster>
          }
          groupBy: {
            args: Prisma.EnvironmentMasterGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentMasterGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentMasterCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentMasterCountAggregateOutputType> | number
          }
        }
      }
      ProjectEnvironment: {
        payload: Prisma.$ProjectEnvironmentPayload<ExtArgs>
        fields: Prisma.ProjectEnvironmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectEnvironmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectEnvironmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          findFirst: {
            args: Prisma.ProjectEnvironmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectEnvironmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          findMany: {
            args: Prisma.ProjectEnvironmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>[]
          }
          create: {
            args: Prisma.ProjectEnvironmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          createMany: {
            args: Prisma.ProjectEnvironmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectEnvironmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>[]
          }
          delete: {
            args: Prisma.ProjectEnvironmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          update: {
            args: Prisma.ProjectEnvironmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectEnvironmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectEnvironmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectEnvironmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEnvironmentPayload>
          }
          aggregate: {
            args: Prisma.ProjectEnvironmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectEnvironment>
          }
          groupBy: {
            args: Prisma.ProjectEnvironmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectEnvironmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectEnvironmentCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectEnvironmentCountAggregateOutputType> | number
          }
        }
      }
      ServiceEnvironment: {
        payload: Prisma.$ServiceEnvironmentPayload<ExtArgs>
        fields: Prisma.ServiceEnvironmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceEnvironmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceEnvironmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          findFirst: {
            args: Prisma.ServiceEnvironmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceEnvironmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          findMany: {
            args: Prisma.ServiceEnvironmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>[]
          }
          create: {
            args: Prisma.ServiceEnvironmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          createMany: {
            args: Prisma.ServiceEnvironmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceEnvironmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>[]
          }
          delete: {
            args: Prisma.ServiceEnvironmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          update: {
            args: Prisma.ServiceEnvironmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          deleteMany: {
            args: Prisma.ServiceEnvironmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceEnvironmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceEnvironmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEnvironmentPayload>
          }
          aggregate: {
            args: Prisma.ServiceEnvironmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceEnvironment>
          }
          groupBy: {
            args: Prisma.ServiceEnvironmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceEnvironmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceEnvironmentCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceEnvironmentCountAggregateOutputType> | number
          }
        }
      }
      BuildDetails: {
        payload: Prisma.$BuildDetailsPayload<ExtArgs>
        fields: Prisma.BuildDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          findFirst: {
            args: Prisma.BuildDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          findMany: {
            args: Prisma.BuildDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>[]
          }
          create: {
            args: Prisma.BuildDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          createMany: {
            args: Prisma.BuildDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>[]
          }
          delete: {
            args: Prisma.BuildDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          update: {
            args: Prisma.BuildDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BuildDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuildDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildDetailsPayload>
          }
          aggregate: {
            args: Prisma.BuildDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildDetails>
          }
          groupBy: {
            args: Prisma.BuildDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<BuildDetailsCountAggregateOutputType> | number
          }
        }
      }
      Deployment: {
        payload: Prisma.$DeploymentPayload<ExtArgs>
        fields: Prisma.DeploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findFirst: {
            args: Prisma.DeploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findMany: {
            args: Prisma.DeploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          create: {
            args: Prisma.DeploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          createMany: {
            args: Prisma.DeploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          delete: {
            args: Prisma.DeploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          update: {
            args: Prisma.DeploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.DeploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      Cluster: {
        payload: Prisma.$ClusterPayload<ExtArgs>
        fields: Prisma.ClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findFirst: {
            args: Prisma.ClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findMany: {
            args: Prisma.ClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          create: {
            args: Prisma.ClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          createMany: {
            args: Prisma.ClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          delete: {
            args: Prisma.ClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          update: {
            args: Prisma.ClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          deleteMany: {
            args: Prisma.ClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.ClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
      Namespace: {
        payload: Prisma.$NamespacePayload<ExtArgs>
        fields: Prisma.NamespaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NamespaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NamespaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          findFirst: {
            args: Prisma.NamespaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NamespaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          findMany: {
            args: Prisma.NamespaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>[]
          }
          create: {
            args: Prisma.NamespaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          createMany: {
            args: Prisma.NamespaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NamespaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>[]
          }
          delete: {
            args: Prisma.NamespaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          update: {
            args: Prisma.NamespaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          deleteMany: {
            args: Prisma.NamespaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NamespaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NamespaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamespacePayload>
          }
          aggregate: {
            args: Prisma.NamespaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNamespace>
          }
          groupBy: {
            args: Prisma.NamespaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<NamespaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.NamespaceCountArgs<ExtArgs>
            result: $Utils.Optional<NamespaceCountAggregateOutputType> | number
          }
        }
      }
      Registry: {
        payload: Prisma.$RegistryPayload<ExtArgs>
        fields: Prisma.RegistryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          findFirst: {
            args: Prisma.RegistryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          findMany: {
            args: Prisma.RegistryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>[]
          }
          create: {
            args: Prisma.RegistryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          createMany: {
            args: Prisma.RegistryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>[]
          }
          delete: {
            args: Prisma.RegistryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          update: {
            args: Prisma.RegistryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          deleteMany: {
            args: Prisma.RegistryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistryPayload>
          }
          aggregate: {
            args: Prisma.RegistryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistry>
          }
          groupBy: {
            args: Prisma.RegistryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistryCountArgs<ExtArgs>
            result: $Utils.Optional<RegistryCountAggregateOutputType> | number
          }
        }
      }
      VmGroup: {
        payload: Prisma.$VmGroupPayload<ExtArgs>
        fields: Prisma.VmGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VmGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VmGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          findFirst: {
            args: Prisma.VmGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VmGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          findMany: {
            args: Prisma.VmGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>[]
          }
          create: {
            args: Prisma.VmGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          createMany: {
            args: Prisma.VmGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VmGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>[]
          }
          delete: {
            args: Prisma.VmGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          update: {
            args: Prisma.VmGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          deleteMany: {
            args: Prisma.VmGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VmGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VmGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VmGroupPayload>
          }
          aggregate: {
            args: Prisma.VmGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVmGroup>
          }
          groupBy: {
            args: Prisma.VmGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VmGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.VmGroupCountArgs<ExtArgs>
            result: $Utils.Optional<VmGroupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    services: number
    projectEnvironments: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ProjectCountOutputTypeCountServicesArgs
    projectEnvironments?: boolean | ProjectCountOutputTypeCountProjectEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    serviceEnvironments: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceEnvironments?: boolean | ServiceCountOutputTypeCountServiceEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountServiceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEnvironmentWhereInput
  }


  /**
   * Count Type EnvironmentMasterCountOutputType
   */

  export type EnvironmentMasterCountOutputType = {
    projectEnvironments: number
  }

  export type EnvironmentMasterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | EnvironmentMasterCountOutputTypeCountProjectEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * EnvironmentMasterCountOutputType without action
   */
  export type EnvironmentMasterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMasterCountOutputType
     */
    select?: EnvironmentMasterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvironmentMasterCountOutputType without action
   */
  export type EnvironmentMasterCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }


  /**
   * Count Type ProjectEnvironmentCountOutputType
   */

  export type ProjectEnvironmentCountOutputType = {
    registries: number
    vmGroups: number
    serviceEnvironments: number
    builds: number
    deployments: number
  }

  export type ProjectEnvironmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registries?: boolean | ProjectEnvironmentCountOutputTypeCountRegistriesArgs
    vmGroups?: boolean | ProjectEnvironmentCountOutputTypeCountVmGroupsArgs
    serviceEnvironments?: boolean | ProjectEnvironmentCountOutputTypeCountServiceEnvironmentsArgs
    builds?: boolean | ProjectEnvironmentCountOutputTypeCountBuildsArgs
    deployments?: boolean | ProjectEnvironmentCountOutputTypeCountDeploymentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironmentCountOutputType
     */
    select?: ProjectEnvironmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeCountRegistriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistryWhereInput
  }

  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeCountVmGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VmGroupWhereInput
  }

  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeCountServiceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEnvironmentWhereInput
  }

  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildDetailsWhereInput
  }

  /**
   * ProjectEnvironmentCountOutputType without action
   */
  export type ProjectEnvironmentCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }


  /**
   * Count Type ClusterCountOutputType
   */

  export type ClusterCountOutputType = {
    projectEnvironments: number
  }

  export type ClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | ClusterCountOutputTypeCountProjectEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterCountOutputType
     */
    select?: ClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }


  /**
   * Count Type NamespaceCountOutputType
   */

  export type NamespaceCountOutputType = {
    projectEnvironments: number
  }

  export type NamespaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | NamespaceCountOutputTypeCountProjectEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * NamespaceCountOutputType without action
   */
  export type NamespaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamespaceCountOutputType
     */
    select?: NamespaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NamespaceCountOutputType without action
   */
  export type NamespaceCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }


  /**
   * Count Type RegistryCountOutputType
   */

  export type RegistryCountOutputType = {
    projectEnvironments: number
    serviceEnvironments: number
  }

  export type RegistryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | RegistryCountOutputTypeCountProjectEnvironmentsArgs
    serviceEnvironments?: boolean | RegistryCountOutputTypeCountServiceEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * RegistryCountOutputType without action
   */
  export type RegistryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistryCountOutputType
     */
    select?: RegistryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistryCountOutputType without action
   */
  export type RegistryCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }

  /**
   * RegistryCountOutputType without action
   */
  export type RegistryCountOutputTypeCountServiceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEnvironmentWhereInput
  }


  /**
   * Count Type VmGroupCountOutputType
   */

  export type VmGroupCountOutputType = {
    projectEnvironments: number
  }

  export type VmGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | VmGroupCountOutputTypeCountProjectEnvironmentsArgs
  }

  // Custom InputTypes
  /**
   * VmGroupCountOutputType without action
   */
  export type VmGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroupCountOutputType
     */
    select?: VmGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VmGroupCountOutputType without action
   */
  export type VmGroupCountOutputTypeCountProjectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Project$servicesArgs<ExtArgs>
    projectEnvironments?: boolean | Project$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Project$servicesArgs<ExtArgs>
    projectEnvironments?: boolean | Project$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Project$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Project$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    projectEnvironments<T extends Project$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.services
   */
  export type Project$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Project.projectEnvironments
   */
  export type Project$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    buildStrategy: $Enums.BuildStrategy | null
    type: $Enums.ServiceType | null
    status: $Enums.ServiceStatus | null
    repoUrl: string | null
    businessFunction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    buildStrategy: $Enums.BuildStrategy | null
    type: $Enums.ServiceType | null
    status: $Enums.ServiceStatus | null
    repoUrl: string | null
    businessFunction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    buildStrategy: number
    type: number
    status: number
    repoUrl: number
    businessFunction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    buildStrategy?: true
    type?: true
    status?: true
    repoUrl?: true
    businessFunction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    buildStrategy?: true
    type?: true
    status?: true
    repoUrl?: true
    businessFunction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    buildStrategy?: true
    type?: true
    status?: true
    repoUrl?: true
    businessFunction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    projectId: number
    buildStrategy: $Enums.BuildStrategy
    type: $Enums.ServiceType
    status: $Enums.ServiceStatus
    repoUrl: string
    businessFunction: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    buildStrategy?: boolean
    type?: boolean
    status?: boolean
    repoUrl?: boolean
    businessFunction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    serviceEnvironments?: boolean | Service$serviceEnvironmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    buildStrategy?: boolean
    type?: boolean
    status?: boolean
    repoUrl?: boolean
    businessFunction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    buildStrategy?: boolean
    type?: boolean
    status?: boolean
    repoUrl?: boolean
    businessFunction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    serviceEnvironments?: boolean | Service$serviceEnvironmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      serviceEnvironments: Prisma.$ServiceEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
      buildStrategy: $Enums.BuildStrategy
      type: $Enums.ServiceType
      status: $Enums.ServiceStatus
      repoUrl: string
      businessFunction: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    serviceEnvironments<T extends Service$serviceEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$serviceEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly projectId: FieldRef<"Service", 'Int'>
    readonly buildStrategy: FieldRef<"Service", 'BuildStrategy'>
    readonly type: FieldRef<"Service", 'ServiceType'>
    readonly status: FieldRef<"Service", 'ServiceStatus'>
    readonly repoUrl: FieldRef<"Service", 'String'>
    readonly businessFunction: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.serviceEnvironments
   */
  export type Service$serviceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    where?: ServiceEnvironmentWhereInput
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    cursor?: ServiceEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentMaster
   */

  export type AggregateEnvironmentMaster = {
    _count: EnvironmentMasterCountAggregateOutputType | null
    _avg: EnvironmentMasterAvgAggregateOutputType | null
    _sum: EnvironmentMasterSumAggregateOutputType | null
    _min: EnvironmentMasterMinAggregateOutputType | null
    _max: EnvironmentMasterMaxAggregateOutputType | null
  }

  export type EnvironmentMasterAvgAggregateOutputType = {
    id: number | null
  }

  export type EnvironmentMasterSumAggregateOutputType = {
    id: number | null
  }

  export type EnvironmentMasterMinAggregateOutputType = {
    id: number | null
    name: string | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentMasterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentMasterCountAggregateOutputType = {
    id: number
    name: number
    manualBuild: number
    manualDeploy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentMasterAvgAggregateInputType = {
    id?: true
  }

  export type EnvironmentMasterSumAggregateInputType = {
    id?: true
  }

  export type EnvironmentMasterMinAggregateInputType = {
    id?: true
    name?: true
    manualBuild?: true
    manualDeploy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentMasterMaxAggregateInputType = {
    id?: true
    name?: true
    manualBuild?: true
    manualDeploy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentMasterCountAggregateInputType = {
    id?: true
    name?: true
    manualBuild?: true
    manualDeploy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentMasterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentMaster to aggregate.
     */
    where?: EnvironmentMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentMasters to fetch.
     */
    orderBy?: EnvironmentMasterOrderByWithRelationInput | EnvironmentMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentMasters
    **/
    _count?: true | EnvironmentMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvironmentMasterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvironmentMasterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentMasterMaxAggregateInputType
  }

  export type GetEnvironmentMasterAggregateType<T extends EnvironmentMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentMaster[P]>
      : GetScalarType<T[P], AggregateEnvironmentMaster[P]>
  }




  export type EnvironmentMasterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentMasterWhereInput
    orderBy?: EnvironmentMasterOrderByWithAggregationInput | EnvironmentMasterOrderByWithAggregationInput[]
    by: EnvironmentMasterScalarFieldEnum[] | EnvironmentMasterScalarFieldEnum
    having?: EnvironmentMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentMasterCountAggregateInputType | true
    _avg?: EnvironmentMasterAvgAggregateInputType
    _sum?: EnvironmentMasterSumAggregateInputType
    _min?: EnvironmentMasterMinAggregateInputType
    _max?: EnvironmentMasterMaxAggregateInputType
  }

  export type EnvironmentMasterGroupByOutputType = {
    id: number
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentMasterCountAggregateOutputType | null
    _avg: EnvironmentMasterAvgAggregateOutputType | null
    _sum: EnvironmentMasterSumAggregateOutputType | null
    _min: EnvironmentMasterMinAggregateOutputType | null
    _max: EnvironmentMasterMaxAggregateOutputType | null
  }

  type GetEnvironmentMasterGroupByPayload<T extends EnvironmentMasterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentMasterGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentMasterGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentMasterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironments?: boolean | EnvironmentMaster$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | EnvironmentMasterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentMaster"]>

  export type EnvironmentMasterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["environmentMaster"]>

  export type EnvironmentMasterSelectScalar = {
    id?: boolean
    name?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentMasterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | EnvironmentMaster$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | EnvironmentMasterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnvironmentMasterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnvironmentMasterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentMaster"
    objects: {
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      manualBuild: boolean
      manualDeploy: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environmentMaster"]>
    composites: {}
  }

  type EnvironmentMasterGetPayload<S extends boolean | null | undefined | EnvironmentMasterDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentMasterPayload, S>

  type EnvironmentMasterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnvironmentMasterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnvironmentMasterCountAggregateInputType | true
    }

  export interface EnvironmentMasterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentMaster'], meta: { name: 'EnvironmentMaster' } }
    /**
     * Find zero or one EnvironmentMaster that matches the filter.
     * @param {EnvironmentMasterFindUniqueArgs} args - Arguments to find a EnvironmentMaster
     * @example
     * // Get one EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentMasterFindUniqueArgs>(args: SelectSubset<T, EnvironmentMasterFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EnvironmentMaster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnvironmentMasterFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentMaster
     * @example
     * // Get one EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentMasterFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentMasterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EnvironmentMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterFindFirstArgs} args - Arguments to find a EnvironmentMaster
     * @example
     * // Get one EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentMasterFindFirstArgs>(args?: SelectSubset<T, EnvironmentMasterFindFirstArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EnvironmentMaster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterFindFirstOrThrowArgs} args - Arguments to find a EnvironmentMaster
     * @example
     * // Get one EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentMasterFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentMasterFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EnvironmentMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentMasters
     * const environmentMasters = await prisma.environmentMaster.findMany()
     * 
     * // Get first 10 EnvironmentMasters
     * const environmentMasters = await prisma.environmentMaster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentMasterWithIdOnly = await prisma.environmentMaster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentMasterFindManyArgs>(args?: SelectSubset<T, EnvironmentMasterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EnvironmentMaster.
     * @param {EnvironmentMasterCreateArgs} args - Arguments to create a EnvironmentMaster.
     * @example
     * // Create one EnvironmentMaster
     * const EnvironmentMaster = await prisma.environmentMaster.create({
     *   data: {
     *     // ... data to create a EnvironmentMaster
     *   }
     * })
     * 
     */
    create<T extends EnvironmentMasterCreateArgs>(args: SelectSubset<T, EnvironmentMasterCreateArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EnvironmentMasters.
     * @param {EnvironmentMasterCreateManyArgs} args - Arguments to create many EnvironmentMasters.
     * @example
     * // Create many EnvironmentMasters
     * const environmentMaster = await prisma.environmentMaster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentMasterCreateManyArgs>(args?: SelectSubset<T, EnvironmentMasterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentMasters and returns the data saved in the database.
     * @param {EnvironmentMasterCreateManyAndReturnArgs} args - Arguments to create many EnvironmentMasters.
     * @example
     * // Create many EnvironmentMasters
     * const environmentMaster = await prisma.environmentMaster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentMasters and only return the `id`
     * const environmentMasterWithIdOnly = await prisma.environmentMaster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentMasterCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentMasterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EnvironmentMaster.
     * @param {EnvironmentMasterDeleteArgs} args - Arguments to delete one EnvironmentMaster.
     * @example
     * // Delete one EnvironmentMaster
     * const EnvironmentMaster = await prisma.environmentMaster.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentMaster
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentMasterDeleteArgs>(args: SelectSubset<T, EnvironmentMasterDeleteArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EnvironmentMaster.
     * @param {EnvironmentMasterUpdateArgs} args - Arguments to update one EnvironmentMaster.
     * @example
     * // Update one EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentMasterUpdateArgs>(args: SelectSubset<T, EnvironmentMasterUpdateArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EnvironmentMasters.
     * @param {EnvironmentMasterDeleteManyArgs} args - Arguments to filter EnvironmentMasters to delete.
     * @example
     * // Delete a few EnvironmentMasters
     * const { count } = await prisma.environmentMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentMasterDeleteManyArgs>(args?: SelectSubset<T, EnvironmentMasterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentMasters
     * const environmentMaster = await prisma.environmentMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentMasterUpdateManyArgs>(args: SelectSubset<T, EnvironmentMasterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EnvironmentMaster.
     * @param {EnvironmentMasterUpsertArgs} args - Arguments to update or create a EnvironmentMaster.
     * @example
     * // Update or create a EnvironmentMaster
     * const environmentMaster = await prisma.environmentMaster.upsert({
     *   create: {
     *     // ... data to create a EnvironmentMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentMaster we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentMasterUpsertArgs>(args: SelectSubset<T, EnvironmentMasterUpsertArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EnvironmentMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterCountArgs} args - Arguments to filter EnvironmentMasters to count.
     * @example
     * // Count the number of EnvironmentMasters
     * const count = await prisma.environmentMaster.count({
     *   where: {
     *     // ... the filter for the EnvironmentMasters we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentMasterCountArgs>(
      args?: Subset<T, EnvironmentMasterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentMasterAggregateArgs>(args: Subset<T, EnvironmentMasterAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentMasterAggregateType<T>>

    /**
     * Group by EnvironmentMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentMasterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentMasterGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentMasterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentMasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentMaster model
   */
  readonly fields: EnvironmentMasterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentMasterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironments<T extends EnvironmentMaster$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, EnvironmentMaster$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentMaster model
   */ 
  interface EnvironmentMasterFieldRefs {
    readonly id: FieldRef<"EnvironmentMaster", 'Int'>
    readonly name: FieldRef<"EnvironmentMaster", 'String'>
    readonly manualBuild: FieldRef<"EnvironmentMaster", 'Boolean'>
    readonly manualDeploy: FieldRef<"EnvironmentMaster", 'Boolean'>
    readonly createdAt: FieldRef<"EnvironmentMaster", 'DateTime'>
    readonly updatedAt: FieldRef<"EnvironmentMaster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentMaster findUnique
   */
  export type EnvironmentMasterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentMaster to fetch.
     */
    where: EnvironmentMasterWhereUniqueInput
  }

  /**
   * EnvironmentMaster findUniqueOrThrow
   */
  export type EnvironmentMasterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentMaster to fetch.
     */
    where: EnvironmentMasterWhereUniqueInput
  }

  /**
   * EnvironmentMaster findFirst
   */
  export type EnvironmentMasterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentMaster to fetch.
     */
    where?: EnvironmentMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentMasters to fetch.
     */
    orderBy?: EnvironmentMasterOrderByWithRelationInput | EnvironmentMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentMasters.
     */
    cursor?: EnvironmentMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentMasters.
     */
    distinct?: EnvironmentMasterScalarFieldEnum | EnvironmentMasterScalarFieldEnum[]
  }

  /**
   * EnvironmentMaster findFirstOrThrow
   */
  export type EnvironmentMasterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentMaster to fetch.
     */
    where?: EnvironmentMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentMasters to fetch.
     */
    orderBy?: EnvironmentMasterOrderByWithRelationInput | EnvironmentMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentMasters.
     */
    cursor?: EnvironmentMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentMasters.
     */
    distinct?: EnvironmentMasterScalarFieldEnum | EnvironmentMasterScalarFieldEnum[]
  }

  /**
   * EnvironmentMaster findMany
   */
  export type EnvironmentMasterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentMasters to fetch.
     */
    where?: EnvironmentMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentMasters to fetch.
     */
    orderBy?: EnvironmentMasterOrderByWithRelationInput | EnvironmentMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentMasters.
     */
    cursor?: EnvironmentMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentMasters.
     */
    skip?: number
    distinct?: EnvironmentMasterScalarFieldEnum | EnvironmentMasterScalarFieldEnum[]
  }

  /**
   * EnvironmentMaster create
   */
  export type EnvironmentMasterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentMaster.
     */
    data: XOR<EnvironmentMasterCreateInput, EnvironmentMasterUncheckedCreateInput>
  }

  /**
   * EnvironmentMaster createMany
   */
  export type EnvironmentMasterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentMasters.
     */
    data: EnvironmentMasterCreateManyInput | EnvironmentMasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentMaster createManyAndReturn
   */
  export type EnvironmentMasterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EnvironmentMasters.
     */
    data: EnvironmentMasterCreateManyInput | EnvironmentMasterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentMaster update
   */
  export type EnvironmentMasterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentMaster.
     */
    data: XOR<EnvironmentMasterUpdateInput, EnvironmentMasterUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentMaster to update.
     */
    where: EnvironmentMasterWhereUniqueInput
  }

  /**
   * EnvironmentMaster updateMany
   */
  export type EnvironmentMasterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentMasters.
     */
    data: XOR<EnvironmentMasterUpdateManyMutationInput, EnvironmentMasterUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentMasters to update
     */
    where?: EnvironmentMasterWhereInput
  }

  /**
   * EnvironmentMaster upsert
   */
  export type EnvironmentMasterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentMaster to update in case it exists.
     */
    where: EnvironmentMasterWhereUniqueInput
    /**
     * In case the EnvironmentMaster found by the `where` argument doesn't exist, create a new EnvironmentMaster with this data.
     */
    create: XOR<EnvironmentMasterCreateInput, EnvironmentMasterUncheckedCreateInput>
    /**
     * In case the EnvironmentMaster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentMasterUpdateInput, EnvironmentMasterUncheckedUpdateInput>
  }

  /**
   * EnvironmentMaster delete
   */
  export type EnvironmentMasterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentMaster to delete.
     */
    where: EnvironmentMasterWhereUniqueInput
  }

  /**
   * EnvironmentMaster deleteMany
   */
  export type EnvironmentMasterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentMasters to delete
     */
    where?: EnvironmentMasterWhereInput
  }

  /**
   * EnvironmentMaster.projectEnvironments
   */
  export type EnvironmentMaster$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * EnvironmentMaster without action
   */
  export type EnvironmentMasterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentMaster
     */
    select?: EnvironmentMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentMasterInclude<ExtArgs> | null
  }


  /**
   * Model ProjectEnvironment
   */

  export type AggregateProjectEnvironment = {
    _count: ProjectEnvironmentCountAggregateOutputType | null
    _avg: ProjectEnvironmentAvgAggregateOutputType | null
    _sum: ProjectEnvironmentSumAggregateOutputType | null
    _min: ProjectEnvironmentMinAggregateOutputType | null
    _max: ProjectEnvironmentMaxAggregateOutputType | null
  }

  export type ProjectEnvironmentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    environmentMasterId: number | null
    clusterId: number | null
    namespaceId: number | null
  }

  export type ProjectEnvironmentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    environmentMasterId: number | null
    clusterId: number | null
    namespaceId: number | null
  }

  export type ProjectEnvironmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    vaultAccessToken: string | null
    sonarAccessToken: string | null
    environmentMasterId: number | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    hyperBuild: boolean | null
    clusterId: number | null
    namespaceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEnvironmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    vaultAccessToken: string | null
    sonarAccessToken: string | null
    environmentMasterId: number | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    hyperBuild: boolean | null
    clusterId: number | null
    namespaceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEnvironmentCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    vaultAccessToken: number
    sonarAccessToken: number
    environmentMasterId: number
    manualBuild: number
    manualDeploy: number
    hyperBuild: number
    clusterId: number
    namespaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectEnvironmentAvgAggregateInputType = {
    id?: true
    projectId?: true
    environmentMasterId?: true
    clusterId?: true
    namespaceId?: true
  }

  export type ProjectEnvironmentSumAggregateInputType = {
    id?: true
    projectId?: true
    environmentMasterId?: true
    clusterId?: true
    namespaceId?: true
  }

  export type ProjectEnvironmentMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    vaultAccessToken?: true
    sonarAccessToken?: true
    environmentMasterId?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    clusterId?: true
    namespaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEnvironmentMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    vaultAccessToken?: true
    sonarAccessToken?: true
    environmentMasterId?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    clusterId?: true
    namespaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEnvironmentCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    vaultAccessToken?: true
    sonarAccessToken?: true
    environmentMasterId?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    clusterId?: true
    namespaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectEnvironmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEnvironment to aggregate.
     */
    where?: ProjectEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEnvironments to fetch.
     */
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectEnvironments
    **/
    _count?: true | ProjectEnvironmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectEnvironmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectEnvironmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectEnvironmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectEnvironmentMaxAggregateInputType
  }

  export type GetProjectEnvironmentAggregateType<T extends ProjectEnvironmentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectEnvironment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectEnvironment[P]>
      : GetScalarType<T[P], AggregateProjectEnvironment[P]>
  }




  export type ProjectEnvironmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithAggregationInput | ProjectEnvironmentOrderByWithAggregationInput[]
    by: ProjectEnvironmentScalarFieldEnum[] | ProjectEnvironmentScalarFieldEnum
    having?: ProjectEnvironmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectEnvironmentCountAggregateInputType | true
    _avg?: ProjectEnvironmentAvgAggregateInputType
    _sum?: ProjectEnvironmentSumAggregateInputType
    _min?: ProjectEnvironmentMinAggregateInputType
    _max?: ProjectEnvironmentMaxAggregateInputType
  }

  export type ProjectEnvironmentGroupByOutputType = {
    id: number
    name: string
    projectId: number
    vaultAccessToken: string | null
    sonarAccessToken: string | null
    environmentMasterId: number
    manualBuild: boolean
    manualDeploy: boolean
    hyperBuild: boolean
    clusterId: number
    namespaceId: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectEnvironmentCountAggregateOutputType | null
    _avg: ProjectEnvironmentAvgAggregateOutputType | null
    _sum: ProjectEnvironmentSumAggregateOutputType | null
    _min: ProjectEnvironmentMinAggregateOutputType | null
    _max: ProjectEnvironmentMaxAggregateOutputType | null
  }

  type GetProjectEnvironmentGroupByPayload<T extends ProjectEnvironmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectEnvironmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectEnvironmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectEnvironmentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectEnvironmentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectEnvironmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    vaultAccessToken?: boolean
    sonarAccessToken?: boolean
    environmentMasterId?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId?: boolean
    namespaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    environmentMaster?: boolean | EnvironmentMasterDefaultArgs<ExtArgs>
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    namespace?: boolean | NamespaceDefaultArgs<ExtArgs>
    registries?: boolean | ProjectEnvironment$registriesArgs<ExtArgs>
    vmGroups?: boolean | ProjectEnvironment$vmGroupsArgs<ExtArgs>
    serviceEnvironments?: boolean | ProjectEnvironment$serviceEnvironmentsArgs<ExtArgs>
    builds?: boolean | ProjectEnvironment$buildsArgs<ExtArgs>
    deployments?: boolean | ProjectEnvironment$deploymentsArgs<ExtArgs>
    _count?: boolean | ProjectEnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEnvironment"]>

  export type ProjectEnvironmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    vaultAccessToken?: boolean
    sonarAccessToken?: boolean
    environmentMasterId?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId?: boolean
    namespaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    environmentMaster?: boolean | EnvironmentMasterDefaultArgs<ExtArgs>
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    namespace?: boolean | NamespaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEnvironment"]>

  export type ProjectEnvironmentSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    vaultAccessToken?: boolean
    sonarAccessToken?: boolean
    environmentMasterId?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId?: boolean
    namespaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectEnvironmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    environmentMaster?: boolean | EnvironmentMasterDefaultArgs<ExtArgs>
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    namespace?: boolean | NamespaceDefaultArgs<ExtArgs>
    registries?: boolean | ProjectEnvironment$registriesArgs<ExtArgs>
    vmGroups?: boolean | ProjectEnvironment$vmGroupsArgs<ExtArgs>
    serviceEnvironments?: boolean | ProjectEnvironment$serviceEnvironmentsArgs<ExtArgs>
    builds?: boolean | ProjectEnvironment$buildsArgs<ExtArgs>
    deployments?: boolean | ProjectEnvironment$deploymentsArgs<ExtArgs>
    _count?: boolean | ProjectEnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectEnvironmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    environmentMaster?: boolean | EnvironmentMasterDefaultArgs<ExtArgs>
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
    namespace?: boolean | NamespaceDefaultArgs<ExtArgs>
  }

  export type $ProjectEnvironmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectEnvironment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      environmentMaster: Prisma.$EnvironmentMasterPayload<ExtArgs>
      cluster: Prisma.$ClusterPayload<ExtArgs>
      namespace: Prisma.$NamespacePayload<ExtArgs>
      registries: Prisma.$RegistryPayload<ExtArgs>[]
      vmGroups: Prisma.$VmGroupPayload<ExtArgs>[]
      serviceEnvironments: Prisma.$ServiceEnvironmentPayload<ExtArgs>[]
      builds: Prisma.$BuildDetailsPayload<ExtArgs>[]
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
      vaultAccessToken: string | null
      sonarAccessToken: string | null
      environmentMasterId: number
      manualBuild: boolean
      manualDeploy: boolean
      hyperBuild: boolean
      clusterId: number
      namespaceId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectEnvironment"]>
    composites: {}
  }

  type ProjectEnvironmentGetPayload<S extends boolean | null | undefined | ProjectEnvironmentDefaultArgs> = $Result.GetResult<Prisma.$ProjectEnvironmentPayload, S>

  type ProjectEnvironmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectEnvironmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectEnvironmentCountAggregateInputType | true
    }

  export interface ProjectEnvironmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectEnvironment'], meta: { name: 'ProjectEnvironment' } }
    /**
     * Find zero or one ProjectEnvironment that matches the filter.
     * @param {ProjectEnvironmentFindUniqueArgs} args - Arguments to find a ProjectEnvironment
     * @example
     * // Get one ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectEnvironmentFindUniqueArgs>(args: SelectSubset<T, ProjectEnvironmentFindUniqueArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectEnvironment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectEnvironmentFindUniqueOrThrowArgs} args - Arguments to find a ProjectEnvironment
     * @example
     * // Get one ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectEnvironmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectEnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectEnvironment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentFindFirstArgs} args - Arguments to find a ProjectEnvironment
     * @example
     * // Get one ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectEnvironmentFindFirstArgs>(args?: SelectSubset<T, ProjectEnvironmentFindFirstArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectEnvironment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentFindFirstOrThrowArgs} args - Arguments to find a ProjectEnvironment
     * @example
     * // Get one ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectEnvironmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectEnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectEnvironments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectEnvironments
     * const projectEnvironments = await prisma.projectEnvironment.findMany()
     * 
     * // Get first 10 ProjectEnvironments
     * const projectEnvironments = await prisma.projectEnvironment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectEnvironmentWithIdOnly = await prisma.projectEnvironment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectEnvironmentFindManyArgs>(args?: SelectSubset<T, ProjectEnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectEnvironment.
     * @param {ProjectEnvironmentCreateArgs} args - Arguments to create a ProjectEnvironment.
     * @example
     * // Create one ProjectEnvironment
     * const ProjectEnvironment = await prisma.projectEnvironment.create({
     *   data: {
     *     // ... data to create a ProjectEnvironment
     *   }
     * })
     * 
     */
    create<T extends ProjectEnvironmentCreateArgs>(args: SelectSubset<T, ProjectEnvironmentCreateArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectEnvironments.
     * @param {ProjectEnvironmentCreateManyArgs} args - Arguments to create many ProjectEnvironments.
     * @example
     * // Create many ProjectEnvironments
     * const projectEnvironment = await prisma.projectEnvironment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectEnvironmentCreateManyArgs>(args?: SelectSubset<T, ProjectEnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectEnvironments and returns the data saved in the database.
     * @param {ProjectEnvironmentCreateManyAndReturnArgs} args - Arguments to create many ProjectEnvironments.
     * @example
     * // Create many ProjectEnvironments
     * const projectEnvironment = await prisma.projectEnvironment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectEnvironments and only return the `id`
     * const projectEnvironmentWithIdOnly = await prisma.projectEnvironment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectEnvironmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectEnvironmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectEnvironment.
     * @param {ProjectEnvironmentDeleteArgs} args - Arguments to delete one ProjectEnvironment.
     * @example
     * // Delete one ProjectEnvironment
     * const ProjectEnvironment = await prisma.projectEnvironment.delete({
     *   where: {
     *     // ... filter to delete one ProjectEnvironment
     *   }
     * })
     * 
     */
    delete<T extends ProjectEnvironmentDeleteArgs>(args: SelectSubset<T, ProjectEnvironmentDeleteArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectEnvironment.
     * @param {ProjectEnvironmentUpdateArgs} args - Arguments to update one ProjectEnvironment.
     * @example
     * // Update one ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectEnvironmentUpdateArgs>(args: SelectSubset<T, ProjectEnvironmentUpdateArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectEnvironments.
     * @param {ProjectEnvironmentDeleteManyArgs} args - Arguments to filter ProjectEnvironments to delete.
     * @example
     * // Delete a few ProjectEnvironments
     * const { count } = await prisma.projectEnvironment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectEnvironmentDeleteManyArgs>(args?: SelectSubset<T, ProjectEnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectEnvironments
     * const projectEnvironment = await prisma.projectEnvironment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectEnvironmentUpdateManyArgs>(args: SelectSubset<T, ProjectEnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectEnvironment.
     * @param {ProjectEnvironmentUpsertArgs} args - Arguments to update or create a ProjectEnvironment.
     * @example
     * // Update or create a ProjectEnvironment
     * const projectEnvironment = await prisma.projectEnvironment.upsert({
     *   create: {
     *     // ... data to create a ProjectEnvironment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectEnvironment we want to update
     *   }
     * })
     */
    upsert<T extends ProjectEnvironmentUpsertArgs>(args: SelectSubset<T, ProjectEnvironmentUpsertArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentCountArgs} args - Arguments to filter ProjectEnvironments to count.
     * @example
     * // Count the number of ProjectEnvironments
     * const count = await prisma.projectEnvironment.count({
     *   where: {
     *     // ... the filter for the ProjectEnvironments we want to count
     *   }
     * })
    **/
    count<T extends ProjectEnvironmentCountArgs>(
      args?: Subset<T, ProjectEnvironmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectEnvironmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectEnvironmentAggregateArgs>(args: Subset<T, ProjectEnvironmentAggregateArgs>): Prisma.PrismaPromise<GetProjectEnvironmentAggregateType<T>>

    /**
     * Group by ProjectEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEnvironmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectEnvironmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectEnvironmentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectEnvironmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectEnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectEnvironment model
   */
  readonly fields: ProjectEnvironmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectEnvironment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectEnvironmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    environmentMaster<T extends EnvironmentMasterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnvironmentMasterDefaultArgs<ExtArgs>>): Prisma__EnvironmentMasterClient<$Result.GetResult<Prisma.$EnvironmentMasterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cluster<T extends ClusterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClusterDefaultArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    namespace<T extends NamespaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NamespaceDefaultArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    registries<T extends ProjectEnvironment$registriesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironment$registriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findMany"> | Null>
    vmGroups<T extends ProjectEnvironment$vmGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironment$vmGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findMany"> | Null>
    serviceEnvironments<T extends ProjectEnvironment$serviceEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironment$serviceEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    builds<T extends ProjectEnvironment$buildsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironment$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findMany"> | Null>
    deployments<T extends ProjectEnvironment$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironment$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectEnvironment model
   */ 
  interface ProjectEnvironmentFieldRefs {
    readonly id: FieldRef<"ProjectEnvironment", 'Int'>
    readonly name: FieldRef<"ProjectEnvironment", 'String'>
    readonly projectId: FieldRef<"ProjectEnvironment", 'Int'>
    readonly vaultAccessToken: FieldRef<"ProjectEnvironment", 'String'>
    readonly sonarAccessToken: FieldRef<"ProjectEnvironment", 'String'>
    readonly environmentMasterId: FieldRef<"ProjectEnvironment", 'Int'>
    readonly manualBuild: FieldRef<"ProjectEnvironment", 'Boolean'>
    readonly manualDeploy: FieldRef<"ProjectEnvironment", 'Boolean'>
    readonly hyperBuild: FieldRef<"ProjectEnvironment", 'Boolean'>
    readonly clusterId: FieldRef<"ProjectEnvironment", 'Int'>
    readonly namespaceId: FieldRef<"ProjectEnvironment", 'Int'>
    readonly createdAt: FieldRef<"ProjectEnvironment", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectEnvironment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectEnvironment findUnique
   */
  export type ProjectEnvironmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEnvironment to fetch.
     */
    where: ProjectEnvironmentWhereUniqueInput
  }

  /**
   * ProjectEnvironment findUniqueOrThrow
   */
  export type ProjectEnvironmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEnvironment to fetch.
     */
    where: ProjectEnvironmentWhereUniqueInput
  }

  /**
   * ProjectEnvironment findFirst
   */
  export type ProjectEnvironmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEnvironment to fetch.
     */
    where?: ProjectEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEnvironments to fetch.
     */
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEnvironments.
     */
    cursor?: ProjectEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEnvironments.
     */
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment findFirstOrThrow
   */
  export type ProjectEnvironmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEnvironment to fetch.
     */
    where?: ProjectEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEnvironments to fetch.
     */
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEnvironments.
     */
    cursor?: ProjectEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEnvironments.
     */
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment findMany
   */
  export type ProjectEnvironmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEnvironments to fetch.
     */
    where?: ProjectEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEnvironments to fetch.
     */
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectEnvironments.
     */
    cursor?: ProjectEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEnvironments.
     */
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment create
   */
  export type ProjectEnvironmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectEnvironment.
     */
    data: XOR<ProjectEnvironmentCreateInput, ProjectEnvironmentUncheckedCreateInput>
  }

  /**
   * ProjectEnvironment createMany
   */
  export type ProjectEnvironmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectEnvironments.
     */
    data: ProjectEnvironmentCreateManyInput | ProjectEnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectEnvironment createManyAndReturn
   */
  export type ProjectEnvironmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectEnvironments.
     */
    data: ProjectEnvironmentCreateManyInput | ProjectEnvironmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEnvironment update
   */
  export type ProjectEnvironmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectEnvironment.
     */
    data: XOR<ProjectEnvironmentUpdateInput, ProjectEnvironmentUncheckedUpdateInput>
    /**
     * Choose, which ProjectEnvironment to update.
     */
    where: ProjectEnvironmentWhereUniqueInput
  }

  /**
   * ProjectEnvironment updateMany
   */
  export type ProjectEnvironmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectEnvironments.
     */
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEnvironments to update
     */
    where?: ProjectEnvironmentWhereInput
  }

  /**
   * ProjectEnvironment upsert
   */
  export type ProjectEnvironmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectEnvironment to update in case it exists.
     */
    where: ProjectEnvironmentWhereUniqueInput
    /**
     * In case the ProjectEnvironment found by the `where` argument doesn't exist, create a new ProjectEnvironment with this data.
     */
    create: XOR<ProjectEnvironmentCreateInput, ProjectEnvironmentUncheckedCreateInput>
    /**
     * In case the ProjectEnvironment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectEnvironmentUpdateInput, ProjectEnvironmentUncheckedUpdateInput>
  }

  /**
   * ProjectEnvironment delete
   */
  export type ProjectEnvironmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    /**
     * Filter which ProjectEnvironment to delete.
     */
    where: ProjectEnvironmentWhereUniqueInput
  }

  /**
   * ProjectEnvironment deleteMany
   */
  export type ProjectEnvironmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEnvironments to delete
     */
    where?: ProjectEnvironmentWhereInput
  }

  /**
   * ProjectEnvironment.registries
   */
  export type ProjectEnvironment$registriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    where?: RegistryWhereInput
    orderBy?: RegistryOrderByWithRelationInput | RegistryOrderByWithRelationInput[]
    cursor?: RegistryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistryScalarFieldEnum | RegistryScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment.vmGroups
   */
  export type ProjectEnvironment$vmGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    where?: VmGroupWhereInput
    orderBy?: VmGroupOrderByWithRelationInput | VmGroupOrderByWithRelationInput[]
    cursor?: VmGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VmGroupScalarFieldEnum | VmGroupScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment.serviceEnvironments
   */
  export type ProjectEnvironment$serviceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    where?: ServiceEnvironmentWhereInput
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    cursor?: ServiceEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment.builds
   */
  export type ProjectEnvironment$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    where?: BuildDetailsWhereInput
    orderBy?: BuildDetailsOrderByWithRelationInput | BuildDetailsOrderByWithRelationInput[]
    cursor?: BuildDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildDetailsScalarFieldEnum | BuildDetailsScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment.deployments
   */
  export type ProjectEnvironment$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    cursor?: DeploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * ProjectEnvironment without action
   */
  export type ProjectEnvironmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
  }


  /**
   * Model ServiceEnvironment
   */

  export type AggregateServiceEnvironment = {
    _count: ServiceEnvironmentCountAggregateOutputType | null
    _avg: ServiceEnvironmentAvgAggregateOutputType | null
    _sum: ServiceEnvironmentSumAggregateOutputType | null
    _min: ServiceEnvironmentMinAggregateOutputType | null
    _max: ServiceEnvironmentMaxAggregateOutputType | null
  }

  export type ServiceEnvironmentAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    projectEnvironmentId: number | null
    componentId: number | null
    registryId: number | null
    projectJobTemplateId: number | null
  }

  export type ServiceEnvironmentSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    projectEnvironmentId: number | null
    componentId: number | null
    registryId: number | null
    projectJobTemplateId: number | null
  }

  export type ServiceEnvironmentMinAggregateOutputType = {
    id: number | null
    serviceId: number | null
    projectEnvironmentId: number | null
    componentId: number | null
    imageName: string | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    hyperBuild: boolean | null
    registryId: number | null
    artifactName: string | null
    projectJobTemplateId: number | null
    templateVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceEnvironmentMaxAggregateOutputType = {
    id: number | null
    serviceId: number | null
    projectEnvironmentId: number | null
    componentId: number | null
    imageName: string | null
    manualBuild: boolean | null
    manualDeploy: boolean | null
    hyperBuild: boolean | null
    registryId: number | null
    artifactName: string | null
    projectJobTemplateId: number | null
    templateVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceEnvironmentCountAggregateOutputType = {
    id: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: number
    envRoleAccess: number
    manualBuild: number
    manualDeploy: number
    hyperBuild: number
    registryId: number
    artifactName: number
    projectJobTemplateId: number
    templateVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceEnvironmentAvgAggregateInputType = {
    id?: true
    serviceId?: true
    projectEnvironmentId?: true
    componentId?: true
    registryId?: true
    projectJobTemplateId?: true
  }

  export type ServiceEnvironmentSumAggregateInputType = {
    id?: true
    serviceId?: true
    projectEnvironmentId?: true
    componentId?: true
    registryId?: true
    projectJobTemplateId?: true
  }

  export type ServiceEnvironmentMinAggregateInputType = {
    id?: true
    serviceId?: true
    projectEnvironmentId?: true
    componentId?: true
    imageName?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    registryId?: true
    artifactName?: true
    projectJobTemplateId?: true
    templateVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceEnvironmentMaxAggregateInputType = {
    id?: true
    serviceId?: true
    projectEnvironmentId?: true
    componentId?: true
    imageName?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    registryId?: true
    artifactName?: true
    projectJobTemplateId?: true
    templateVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceEnvironmentCountAggregateInputType = {
    id?: true
    serviceId?: true
    projectEnvironmentId?: true
    componentId?: true
    imageName?: true
    envRoleAccess?: true
    manualBuild?: true
    manualDeploy?: true
    hyperBuild?: true
    registryId?: true
    artifactName?: true
    projectJobTemplateId?: true
    templateVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceEnvironmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEnvironment to aggregate.
     */
    where?: ServiceEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEnvironments to fetch.
     */
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceEnvironments
    **/
    _count?: true | ServiceEnvironmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceEnvironmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceEnvironmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceEnvironmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceEnvironmentMaxAggregateInputType
  }

  export type GetServiceEnvironmentAggregateType<T extends ServiceEnvironmentAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceEnvironment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceEnvironment[P]>
      : GetScalarType<T[P], AggregateServiceEnvironment[P]>
  }




  export type ServiceEnvironmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEnvironmentWhereInput
    orderBy?: ServiceEnvironmentOrderByWithAggregationInput | ServiceEnvironmentOrderByWithAggregationInput[]
    by: ServiceEnvironmentScalarFieldEnum[] | ServiceEnvironmentScalarFieldEnum
    having?: ServiceEnvironmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceEnvironmentCountAggregateInputType | true
    _avg?: ServiceEnvironmentAvgAggregateInputType
    _sum?: ServiceEnvironmentSumAggregateInputType
    _min?: ServiceEnvironmentMinAggregateInputType
    _max?: ServiceEnvironmentMaxAggregateInputType
  }

  export type ServiceEnvironmentGroupByOutputType = {
    id: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess: string[]
    manualBuild: boolean
    manualDeploy: boolean
    hyperBuild: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceEnvironmentCountAggregateOutputType | null
    _avg: ServiceEnvironmentAvgAggregateOutputType | null
    _sum: ServiceEnvironmentSumAggregateOutputType | null
    _min: ServiceEnvironmentMinAggregateOutputType | null
    _max: ServiceEnvironmentMaxAggregateOutputType | null
  }

  type GetServiceEnvironmentGroupByPayload<T extends ServiceEnvironmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceEnvironmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceEnvironmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceEnvironmentGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceEnvironmentGroupByOutputType[P]>
        }
      >
    >


  export type ServiceEnvironmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    projectEnvironmentId?: boolean
    componentId?: boolean
    imageName?: boolean
    envRoleAccess?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId?: boolean
    artifactName?: boolean
    projectJobTemplateId?: boolean
    templateVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
    registry?: boolean | RegistryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceEnvironment"]>

  export type ServiceEnvironmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    projectEnvironmentId?: boolean
    componentId?: boolean
    imageName?: boolean
    envRoleAccess?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId?: boolean
    artifactName?: boolean
    projectJobTemplateId?: boolean
    templateVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
    registry?: boolean | RegistryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceEnvironment"]>

  export type ServiceEnvironmentSelectScalar = {
    id?: boolean
    serviceId?: boolean
    projectEnvironmentId?: boolean
    componentId?: boolean
    imageName?: boolean
    envRoleAccess?: boolean
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId?: boolean
    artifactName?: boolean
    projectJobTemplateId?: boolean
    templateVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceEnvironmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
    registry?: boolean | RegistryDefaultArgs<ExtArgs>
  }
  export type ServiceEnvironmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
    registry?: boolean | RegistryDefaultArgs<ExtArgs>
  }

  export type $ServiceEnvironmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceEnvironment"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      projectEnvironment: Prisma.$ProjectEnvironmentPayload<ExtArgs>
      registry: Prisma.$RegistryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceId: number
      projectEnvironmentId: number
      componentId: number
      imageName: string
      envRoleAccess: string[]
      manualBuild: boolean
      manualDeploy: boolean
      hyperBuild: boolean
      registryId: number
      artifactName: string
      projectJobTemplateId: number
      templateVersion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceEnvironment"]>
    composites: {}
  }

  type ServiceEnvironmentGetPayload<S extends boolean | null | undefined | ServiceEnvironmentDefaultArgs> = $Result.GetResult<Prisma.$ServiceEnvironmentPayload, S>

  type ServiceEnvironmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceEnvironmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceEnvironmentCountAggregateInputType | true
    }

  export interface ServiceEnvironmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceEnvironment'], meta: { name: 'ServiceEnvironment' } }
    /**
     * Find zero or one ServiceEnvironment that matches the filter.
     * @param {ServiceEnvironmentFindUniqueArgs} args - Arguments to find a ServiceEnvironment
     * @example
     * // Get one ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceEnvironmentFindUniqueArgs>(args: SelectSubset<T, ServiceEnvironmentFindUniqueArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceEnvironment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceEnvironmentFindUniqueOrThrowArgs} args - Arguments to find a ServiceEnvironment
     * @example
     * // Get one ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceEnvironmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceEnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceEnvironment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentFindFirstArgs} args - Arguments to find a ServiceEnvironment
     * @example
     * // Get one ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceEnvironmentFindFirstArgs>(args?: SelectSubset<T, ServiceEnvironmentFindFirstArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceEnvironment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentFindFirstOrThrowArgs} args - Arguments to find a ServiceEnvironment
     * @example
     * // Get one ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceEnvironmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceEnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceEnvironments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceEnvironments
     * const serviceEnvironments = await prisma.serviceEnvironment.findMany()
     * 
     * // Get first 10 ServiceEnvironments
     * const serviceEnvironments = await prisma.serviceEnvironment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceEnvironmentWithIdOnly = await prisma.serviceEnvironment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceEnvironmentFindManyArgs>(args?: SelectSubset<T, ServiceEnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceEnvironment.
     * @param {ServiceEnvironmentCreateArgs} args - Arguments to create a ServiceEnvironment.
     * @example
     * // Create one ServiceEnvironment
     * const ServiceEnvironment = await prisma.serviceEnvironment.create({
     *   data: {
     *     // ... data to create a ServiceEnvironment
     *   }
     * })
     * 
     */
    create<T extends ServiceEnvironmentCreateArgs>(args: SelectSubset<T, ServiceEnvironmentCreateArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceEnvironments.
     * @param {ServiceEnvironmentCreateManyArgs} args - Arguments to create many ServiceEnvironments.
     * @example
     * // Create many ServiceEnvironments
     * const serviceEnvironment = await prisma.serviceEnvironment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceEnvironmentCreateManyArgs>(args?: SelectSubset<T, ServiceEnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceEnvironments and returns the data saved in the database.
     * @param {ServiceEnvironmentCreateManyAndReturnArgs} args - Arguments to create many ServiceEnvironments.
     * @example
     * // Create many ServiceEnvironments
     * const serviceEnvironment = await prisma.serviceEnvironment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceEnvironments and only return the `id`
     * const serviceEnvironmentWithIdOnly = await prisma.serviceEnvironment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceEnvironmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceEnvironmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceEnvironment.
     * @param {ServiceEnvironmentDeleteArgs} args - Arguments to delete one ServiceEnvironment.
     * @example
     * // Delete one ServiceEnvironment
     * const ServiceEnvironment = await prisma.serviceEnvironment.delete({
     *   where: {
     *     // ... filter to delete one ServiceEnvironment
     *   }
     * })
     * 
     */
    delete<T extends ServiceEnvironmentDeleteArgs>(args: SelectSubset<T, ServiceEnvironmentDeleteArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceEnvironment.
     * @param {ServiceEnvironmentUpdateArgs} args - Arguments to update one ServiceEnvironment.
     * @example
     * // Update one ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceEnvironmentUpdateArgs>(args: SelectSubset<T, ServiceEnvironmentUpdateArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceEnvironments.
     * @param {ServiceEnvironmentDeleteManyArgs} args - Arguments to filter ServiceEnvironments to delete.
     * @example
     * // Delete a few ServiceEnvironments
     * const { count } = await prisma.serviceEnvironment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceEnvironmentDeleteManyArgs>(args?: SelectSubset<T, ServiceEnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceEnvironments
     * const serviceEnvironment = await prisma.serviceEnvironment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceEnvironmentUpdateManyArgs>(args: SelectSubset<T, ServiceEnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceEnvironment.
     * @param {ServiceEnvironmentUpsertArgs} args - Arguments to update or create a ServiceEnvironment.
     * @example
     * // Update or create a ServiceEnvironment
     * const serviceEnvironment = await prisma.serviceEnvironment.upsert({
     *   create: {
     *     // ... data to create a ServiceEnvironment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceEnvironment we want to update
     *   }
     * })
     */
    upsert<T extends ServiceEnvironmentUpsertArgs>(args: SelectSubset<T, ServiceEnvironmentUpsertArgs<ExtArgs>>): Prisma__ServiceEnvironmentClient<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentCountArgs} args - Arguments to filter ServiceEnvironments to count.
     * @example
     * // Count the number of ServiceEnvironments
     * const count = await prisma.serviceEnvironment.count({
     *   where: {
     *     // ... the filter for the ServiceEnvironments we want to count
     *   }
     * })
    **/
    count<T extends ServiceEnvironmentCountArgs>(
      args?: Subset<T, ServiceEnvironmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceEnvironmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceEnvironmentAggregateArgs>(args: Subset<T, ServiceEnvironmentAggregateArgs>): Prisma.PrismaPromise<GetServiceEnvironmentAggregateType<T>>

    /**
     * Group by ServiceEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEnvironmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceEnvironmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceEnvironmentGroupByArgs['orderBy'] }
        : { orderBy?: ServiceEnvironmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceEnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceEnvironment model
   */
  readonly fields: ServiceEnvironmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceEnvironment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceEnvironmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    projectEnvironment<T extends ProjectEnvironmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironmentDefaultArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    registry<T extends RegistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistryDefaultArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceEnvironment model
   */ 
  interface ServiceEnvironmentFieldRefs {
    readonly id: FieldRef<"ServiceEnvironment", 'Int'>
    readonly serviceId: FieldRef<"ServiceEnvironment", 'Int'>
    readonly projectEnvironmentId: FieldRef<"ServiceEnvironment", 'Int'>
    readonly componentId: FieldRef<"ServiceEnvironment", 'Int'>
    readonly imageName: FieldRef<"ServiceEnvironment", 'String'>
    readonly envRoleAccess: FieldRef<"ServiceEnvironment", 'String[]'>
    readonly manualBuild: FieldRef<"ServiceEnvironment", 'Boolean'>
    readonly manualDeploy: FieldRef<"ServiceEnvironment", 'Boolean'>
    readonly hyperBuild: FieldRef<"ServiceEnvironment", 'Boolean'>
    readonly registryId: FieldRef<"ServiceEnvironment", 'Int'>
    readonly artifactName: FieldRef<"ServiceEnvironment", 'String'>
    readonly projectJobTemplateId: FieldRef<"ServiceEnvironment", 'Int'>
    readonly templateVersion: FieldRef<"ServiceEnvironment", 'String'>
    readonly createdAt: FieldRef<"ServiceEnvironment", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceEnvironment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceEnvironment findUnique
   */
  export type ServiceEnvironmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceEnvironment to fetch.
     */
    where: ServiceEnvironmentWhereUniqueInput
  }

  /**
   * ServiceEnvironment findUniqueOrThrow
   */
  export type ServiceEnvironmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceEnvironment to fetch.
     */
    where: ServiceEnvironmentWhereUniqueInput
  }

  /**
   * ServiceEnvironment findFirst
   */
  export type ServiceEnvironmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceEnvironment to fetch.
     */
    where?: ServiceEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEnvironments to fetch.
     */
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEnvironments.
     */
    cursor?: ServiceEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEnvironments.
     */
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * ServiceEnvironment findFirstOrThrow
   */
  export type ServiceEnvironmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceEnvironment to fetch.
     */
    where?: ServiceEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEnvironments to fetch.
     */
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEnvironments.
     */
    cursor?: ServiceEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEnvironments.
     */
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * ServiceEnvironment findMany
   */
  export type ServiceEnvironmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which ServiceEnvironments to fetch.
     */
    where?: ServiceEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEnvironments to fetch.
     */
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceEnvironments.
     */
    cursor?: ServiceEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEnvironments.
     */
    skip?: number
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * ServiceEnvironment create
   */
  export type ServiceEnvironmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceEnvironment.
     */
    data: XOR<ServiceEnvironmentCreateInput, ServiceEnvironmentUncheckedCreateInput>
  }

  /**
   * ServiceEnvironment createMany
   */
  export type ServiceEnvironmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceEnvironments.
     */
    data: ServiceEnvironmentCreateManyInput | ServiceEnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceEnvironment createManyAndReturn
   */
  export type ServiceEnvironmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceEnvironments.
     */
    data: ServiceEnvironmentCreateManyInput | ServiceEnvironmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceEnvironment update
   */
  export type ServiceEnvironmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceEnvironment.
     */
    data: XOR<ServiceEnvironmentUpdateInput, ServiceEnvironmentUncheckedUpdateInput>
    /**
     * Choose, which ServiceEnvironment to update.
     */
    where: ServiceEnvironmentWhereUniqueInput
  }

  /**
   * ServiceEnvironment updateMany
   */
  export type ServiceEnvironmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceEnvironments.
     */
    data: XOR<ServiceEnvironmentUpdateManyMutationInput, ServiceEnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which ServiceEnvironments to update
     */
    where?: ServiceEnvironmentWhereInput
  }

  /**
   * ServiceEnvironment upsert
   */
  export type ServiceEnvironmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceEnvironment to update in case it exists.
     */
    where: ServiceEnvironmentWhereUniqueInput
    /**
     * In case the ServiceEnvironment found by the `where` argument doesn't exist, create a new ServiceEnvironment with this data.
     */
    create: XOR<ServiceEnvironmentCreateInput, ServiceEnvironmentUncheckedCreateInput>
    /**
     * In case the ServiceEnvironment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceEnvironmentUpdateInput, ServiceEnvironmentUncheckedUpdateInput>
  }

  /**
   * ServiceEnvironment delete
   */
  export type ServiceEnvironmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    /**
     * Filter which ServiceEnvironment to delete.
     */
    where: ServiceEnvironmentWhereUniqueInput
  }

  /**
   * ServiceEnvironment deleteMany
   */
  export type ServiceEnvironmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEnvironments to delete
     */
    where?: ServiceEnvironmentWhereInput
  }

  /**
   * ServiceEnvironment without action
   */
  export type ServiceEnvironmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
  }


  /**
   * Model BuildDetails
   */

  export type AggregateBuildDetails = {
    _count: BuildDetailsCountAggregateOutputType | null
    _avg: BuildDetailsAvgAggregateOutputType | null
    _sum: BuildDetailsSumAggregateOutputType | null
    _min: BuildDetailsMinAggregateOutputType | null
    _max: BuildDetailsMaxAggregateOutputType | null
  }

  export type BuildDetailsAvgAggregateOutputType = {
    id: number | null
    gitRepoId: number | null
    depth: number | null
    projectJobTemplateId: number | null
    projectCiScopeId: number | null
    projectEnvironmentId: number | null
  }

  export type BuildDetailsSumAggregateOutputType = {
    id: number | null
    gitRepoId: number | null
    depth: number | null
    projectJobTemplateId: number | null
    projectCiScopeId: number | null
    projectEnvironmentId: number | null
  }

  export type BuildDetailsMinAggregateOutputType = {
    id: number | null
    gitRepoId: number | null
    typeLabel: string | null
    dockerfilePath: string | null
    depth: number | null
    shallowCloning: boolean | null
    branchName: string | null
    projectJobTemplateId: number | null
    projectCiScopeId: number | null
    sonarProjectKey: string | null
    queueName: string | null
    projectEnvironmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildDetailsMaxAggregateOutputType = {
    id: number | null
    gitRepoId: number | null
    typeLabel: string | null
    dockerfilePath: string | null
    depth: number | null
    shallowCloning: boolean | null
    branchName: string | null
    projectJobTemplateId: number | null
    projectCiScopeId: number | null
    sonarProjectKey: string | null
    queueName: string | null
    projectEnvironmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildDetailsCountAggregateOutputType = {
    id: number
    gitRepoId: number
    typeLabel: number
    dockerfilePath: number
    depth: number
    shallowCloning: number
    customParameters: number
    buildxPlatform: number
    branchName: number
    projectJobTemplateId: number
    projectCiScopeId: number
    sonarProjectKey: number
    queueName: number
    projectEnvironmentId: number
    envCiBuildVariable: number
    envCiHook: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildDetailsAvgAggregateInputType = {
    id?: true
    gitRepoId?: true
    depth?: true
    projectJobTemplateId?: true
    projectCiScopeId?: true
    projectEnvironmentId?: true
  }

  export type BuildDetailsSumAggregateInputType = {
    id?: true
    gitRepoId?: true
    depth?: true
    projectJobTemplateId?: true
    projectCiScopeId?: true
    projectEnvironmentId?: true
  }

  export type BuildDetailsMinAggregateInputType = {
    id?: true
    gitRepoId?: true
    typeLabel?: true
    dockerfilePath?: true
    depth?: true
    shallowCloning?: true
    branchName?: true
    projectJobTemplateId?: true
    projectCiScopeId?: true
    sonarProjectKey?: true
    queueName?: true
    projectEnvironmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildDetailsMaxAggregateInputType = {
    id?: true
    gitRepoId?: true
    typeLabel?: true
    dockerfilePath?: true
    depth?: true
    shallowCloning?: true
    branchName?: true
    projectJobTemplateId?: true
    projectCiScopeId?: true
    sonarProjectKey?: true
    queueName?: true
    projectEnvironmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildDetailsCountAggregateInputType = {
    id?: true
    gitRepoId?: true
    typeLabel?: true
    dockerfilePath?: true
    depth?: true
    shallowCloning?: true
    customParameters?: true
    buildxPlatform?: true
    branchName?: true
    projectJobTemplateId?: true
    projectCiScopeId?: true
    sonarProjectKey?: true
    queueName?: true
    projectEnvironmentId?: true
    envCiBuildVariable?: true
    envCiHook?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildDetails to aggregate.
     */
    where?: BuildDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildDetails to fetch.
     */
    orderBy?: BuildDetailsOrderByWithRelationInput | BuildDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuildDetails
    **/
    _count?: true | BuildDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildDetailsMaxAggregateInputType
  }

  export type GetBuildDetailsAggregateType<T extends BuildDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildDetails[P]>
      : GetScalarType<T[P], AggregateBuildDetails[P]>
  }




  export type BuildDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildDetailsWhereInput
    orderBy?: BuildDetailsOrderByWithAggregationInput | BuildDetailsOrderByWithAggregationInput[]
    by: BuildDetailsScalarFieldEnum[] | BuildDetailsScalarFieldEnum
    having?: BuildDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildDetailsCountAggregateInputType | true
    _avg?: BuildDetailsAvgAggregateInputType
    _sum?: BuildDetailsSumAggregateInputType
    _min?: BuildDetailsMinAggregateInputType
    _max?: BuildDetailsMaxAggregateInputType
  }

  export type BuildDetailsGroupByOutputType = {
    id: number
    gitRepoId: number
    typeLabel: string | null
    dockerfilePath: string
    depth: number
    shallowCloning: boolean
    customParameters: JsonValue | null
    buildxPlatform: string[]
    branchName: string
    projectJobTemplateId: number | null
    projectCiScopeId: number | null
    sonarProjectKey: string | null
    queueName: string | null
    projectEnvironmentId: number
    envCiBuildVariable: JsonValue
    envCiHook: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: BuildDetailsCountAggregateOutputType | null
    _avg: BuildDetailsAvgAggregateOutputType | null
    _sum: BuildDetailsSumAggregateOutputType | null
    _min: BuildDetailsMinAggregateOutputType | null
    _max: BuildDetailsMaxAggregateOutputType | null
  }

  type GetBuildDetailsGroupByPayload<T extends BuildDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BuildDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BuildDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gitRepoId?: boolean
    typeLabel?: boolean
    dockerfilePath?: boolean
    depth?: boolean
    shallowCloning?: boolean
    customParameters?: boolean
    buildxPlatform?: boolean
    branchName?: boolean
    projectJobTemplateId?: boolean
    projectCiScopeId?: boolean
    sonarProjectKey?: boolean
    queueName?: boolean
    projectEnvironmentId?: boolean
    envCiBuildVariable?: boolean
    envCiHook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildDetails"]>

  export type BuildDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gitRepoId?: boolean
    typeLabel?: boolean
    dockerfilePath?: boolean
    depth?: boolean
    shallowCloning?: boolean
    customParameters?: boolean
    buildxPlatform?: boolean
    branchName?: boolean
    projectJobTemplateId?: boolean
    projectCiScopeId?: boolean
    sonarProjectKey?: boolean
    queueName?: boolean
    projectEnvironmentId?: boolean
    envCiBuildVariable?: boolean
    envCiHook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildDetails"]>

  export type BuildDetailsSelectScalar = {
    id?: boolean
    gitRepoId?: boolean
    typeLabel?: boolean
    dockerfilePath?: boolean
    depth?: boolean
    shallowCloning?: boolean
    customParameters?: boolean
    buildxPlatform?: boolean
    branchName?: boolean
    projectJobTemplateId?: boolean
    projectCiScopeId?: boolean
    sonarProjectKey?: boolean
    queueName?: boolean
    projectEnvironmentId?: boolean
    envCiBuildVariable?: boolean
    envCiHook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }
  export type BuildDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }

  export type $BuildDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuildDetails"
    objects: {
      projectEnvironment: Prisma.$ProjectEnvironmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gitRepoId: number
      typeLabel: string | null
      dockerfilePath: string
      depth: number
      shallowCloning: boolean
      customParameters: Prisma.JsonValue | null
      buildxPlatform: string[]
      branchName: string
      projectJobTemplateId: number | null
      projectCiScopeId: number | null
      sonarProjectKey: string | null
      queueName: string | null
      projectEnvironmentId: number
      envCiBuildVariable: Prisma.JsonValue
      envCiHook: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["buildDetails"]>
    composites: {}
  }

  type BuildDetailsGetPayload<S extends boolean | null | undefined | BuildDetailsDefaultArgs> = $Result.GetResult<Prisma.$BuildDetailsPayload, S>

  type BuildDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuildDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuildDetailsCountAggregateInputType | true
    }

  export interface BuildDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuildDetails'], meta: { name: 'BuildDetails' } }
    /**
     * Find zero or one BuildDetails that matches the filter.
     * @param {BuildDetailsFindUniqueArgs} args - Arguments to find a BuildDetails
     * @example
     * // Get one BuildDetails
     * const buildDetails = await prisma.buildDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildDetailsFindUniqueArgs>(args: SelectSubset<T, BuildDetailsFindUniqueArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BuildDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BuildDetailsFindUniqueOrThrowArgs} args - Arguments to find a BuildDetails
     * @example
     * // Get one BuildDetails
     * const buildDetails = await prisma.buildDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BuildDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsFindFirstArgs} args - Arguments to find a BuildDetails
     * @example
     * // Get one BuildDetails
     * const buildDetails = await prisma.buildDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildDetailsFindFirstArgs>(args?: SelectSubset<T, BuildDetailsFindFirstArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BuildDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsFindFirstOrThrowArgs} args - Arguments to find a BuildDetails
     * @example
     * // Get one BuildDetails
     * const buildDetails = await prisma.buildDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BuildDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuildDetails
     * const buildDetails = await prisma.buildDetails.findMany()
     * 
     * // Get first 10 BuildDetails
     * const buildDetails = await prisma.buildDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildDetailsWithIdOnly = await prisma.buildDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildDetailsFindManyArgs>(args?: SelectSubset<T, BuildDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BuildDetails.
     * @param {BuildDetailsCreateArgs} args - Arguments to create a BuildDetails.
     * @example
     * // Create one BuildDetails
     * const BuildDetails = await prisma.buildDetails.create({
     *   data: {
     *     // ... data to create a BuildDetails
     *   }
     * })
     * 
     */
    create<T extends BuildDetailsCreateArgs>(args: SelectSubset<T, BuildDetailsCreateArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BuildDetails.
     * @param {BuildDetailsCreateManyArgs} args - Arguments to create many BuildDetails.
     * @example
     * // Create many BuildDetails
     * const buildDetails = await prisma.buildDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildDetailsCreateManyArgs>(args?: SelectSubset<T, BuildDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuildDetails and returns the data saved in the database.
     * @param {BuildDetailsCreateManyAndReturnArgs} args - Arguments to create many BuildDetails.
     * @example
     * // Create many BuildDetails
     * const buildDetails = await prisma.buildDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuildDetails and only return the `id`
     * const buildDetailsWithIdOnly = await prisma.buildDetails.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BuildDetails.
     * @param {BuildDetailsDeleteArgs} args - Arguments to delete one BuildDetails.
     * @example
     * // Delete one BuildDetails
     * const BuildDetails = await prisma.buildDetails.delete({
     *   where: {
     *     // ... filter to delete one BuildDetails
     *   }
     * })
     * 
     */
    delete<T extends BuildDetailsDeleteArgs>(args: SelectSubset<T, BuildDetailsDeleteArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BuildDetails.
     * @param {BuildDetailsUpdateArgs} args - Arguments to update one BuildDetails.
     * @example
     * // Update one BuildDetails
     * const buildDetails = await prisma.buildDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildDetailsUpdateArgs>(args: SelectSubset<T, BuildDetailsUpdateArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BuildDetails.
     * @param {BuildDetailsDeleteManyArgs} args - Arguments to filter BuildDetails to delete.
     * @example
     * // Delete a few BuildDetails
     * const { count } = await prisma.buildDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildDetailsDeleteManyArgs>(args?: SelectSubset<T, BuildDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuildDetails
     * const buildDetails = await prisma.buildDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildDetailsUpdateManyArgs>(args: SelectSubset<T, BuildDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BuildDetails.
     * @param {BuildDetailsUpsertArgs} args - Arguments to update or create a BuildDetails.
     * @example
     * // Update or create a BuildDetails
     * const buildDetails = await prisma.buildDetails.upsert({
     *   create: {
     *     // ... data to create a BuildDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuildDetails we want to update
     *   }
     * })
     */
    upsert<T extends BuildDetailsUpsertArgs>(args: SelectSubset<T, BuildDetailsUpsertArgs<ExtArgs>>): Prisma__BuildDetailsClient<$Result.GetResult<Prisma.$BuildDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BuildDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsCountArgs} args - Arguments to filter BuildDetails to count.
     * @example
     * // Count the number of BuildDetails
     * const count = await prisma.buildDetails.count({
     *   where: {
     *     // ... the filter for the BuildDetails we want to count
     *   }
     * })
    **/
    count<T extends BuildDetailsCountArgs>(
      args?: Subset<T, BuildDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuildDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildDetailsAggregateArgs>(args: Subset<T, BuildDetailsAggregateArgs>): Prisma.PrismaPromise<GetBuildDetailsAggregateType<T>>

    /**
     * Group by BuildDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BuildDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuildDetails model
   */
  readonly fields: BuildDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuildDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironment<T extends ProjectEnvironmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironmentDefaultArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BuildDetails model
   */ 
  interface BuildDetailsFieldRefs {
    readonly id: FieldRef<"BuildDetails", 'Int'>
    readonly gitRepoId: FieldRef<"BuildDetails", 'Int'>
    readonly typeLabel: FieldRef<"BuildDetails", 'String'>
    readonly dockerfilePath: FieldRef<"BuildDetails", 'String'>
    readonly depth: FieldRef<"BuildDetails", 'Int'>
    readonly shallowCloning: FieldRef<"BuildDetails", 'Boolean'>
    readonly customParameters: FieldRef<"BuildDetails", 'Json'>
    readonly buildxPlatform: FieldRef<"BuildDetails", 'String[]'>
    readonly branchName: FieldRef<"BuildDetails", 'String'>
    readonly projectJobTemplateId: FieldRef<"BuildDetails", 'Int'>
    readonly projectCiScopeId: FieldRef<"BuildDetails", 'Int'>
    readonly sonarProjectKey: FieldRef<"BuildDetails", 'String'>
    readonly queueName: FieldRef<"BuildDetails", 'String'>
    readonly projectEnvironmentId: FieldRef<"BuildDetails", 'Int'>
    readonly envCiBuildVariable: FieldRef<"BuildDetails", 'Json'>
    readonly envCiHook: FieldRef<"BuildDetails", 'Json'>
    readonly createdAt: FieldRef<"BuildDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"BuildDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BuildDetails findUnique
   */
  export type BuildDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BuildDetails to fetch.
     */
    where: BuildDetailsWhereUniqueInput
  }

  /**
   * BuildDetails findUniqueOrThrow
   */
  export type BuildDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BuildDetails to fetch.
     */
    where: BuildDetailsWhereUniqueInput
  }

  /**
   * BuildDetails findFirst
   */
  export type BuildDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BuildDetails to fetch.
     */
    where?: BuildDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildDetails to fetch.
     */
    orderBy?: BuildDetailsOrderByWithRelationInput | BuildDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildDetails.
     */
    cursor?: BuildDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildDetails.
     */
    distinct?: BuildDetailsScalarFieldEnum | BuildDetailsScalarFieldEnum[]
  }

  /**
   * BuildDetails findFirstOrThrow
   */
  export type BuildDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BuildDetails to fetch.
     */
    where?: BuildDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildDetails to fetch.
     */
    orderBy?: BuildDetailsOrderByWithRelationInput | BuildDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildDetails.
     */
    cursor?: BuildDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildDetails.
     */
    distinct?: BuildDetailsScalarFieldEnum | BuildDetailsScalarFieldEnum[]
  }

  /**
   * BuildDetails findMany
   */
  export type BuildDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BuildDetails to fetch.
     */
    where?: BuildDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildDetails to fetch.
     */
    orderBy?: BuildDetailsOrderByWithRelationInput | BuildDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuildDetails.
     */
    cursor?: BuildDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildDetails.
     */
    skip?: number
    distinct?: BuildDetailsScalarFieldEnum | BuildDetailsScalarFieldEnum[]
  }

  /**
   * BuildDetails create
   */
  export type BuildDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BuildDetails.
     */
    data: XOR<BuildDetailsCreateInput, BuildDetailsUncheckedCreateInput>
  }

  /**
   * BuildDetails createMany
   */
  export type BuildDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuildDetails.
     */
    data: BuildDetailsCreateManyInput | BuildDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuildDetails createManyAndReturn
   */
  export type BuildDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BuildDetails.
     */
    data: BuildDetailsCreateManyInput | BuildDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildDetails update
   */
  export type BuildDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BuildDetails.
     */
    data: XOR<BuildDetailsUpdateInput, BuildDetailsUncheckedUpdateInput>
    /**
     * Choose, which BuildDetails to update.
     */
    where: BuildDetailsWhereUniqueInput
  }

  /**
   * BuildDetails updateMany
   */
  export type BuildDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuildDetails.
     */
    data: XOR<BuildDetailsUpdateManyMutationInput, BuildDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BuildDetails to update
     */
    where?: BuildDetailsWhereInput
  }

  /**
   * BuildDetails upsert
   */
  export type BuildDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BuildDetails to update in case it exists.
     */
    where: BuildDetailsWhereUniqueInput
    /**
     * In case the BuildDetails found by the `where` argument doesn't exist, create a new BuildDetails with this data.
     */
    create: XOR<BuildDetailsCreateInput, BuildDetailsUncheckedCreateInput>
    /**
     * In case the BuildDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildDetailsUpdateInput, BuildDetailsUncheckedUpdateInput>
  }

  /**
   * BuildDetails delete
   */
  export type BuildDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
    /**
     * Filter which BuildDetails to delete.
     */
    where: BuildDetailsWhereUniqueInput
  }

  /**
   * BuildDetails deleteMany
   */
  export type BuildDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildDetails to delete
     */
    where?: BuildDetailsWhereInput
  }

  /**
   * BuildDetails without action
   */
  export type BuildDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildDetails
     */
    select?: BuildDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _avg: DeploymentAvgAggregateOutputType | null
    _sum: DeploymentSumAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentAvgAggregateOutputType = {
    id: number | null
    projectEnvironmentId: number | null
  }

  export type DeploymentSumAggregateOutputType = {
    id: number | null
    projectEnvironmentId: number | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: number | null
    serviceName: string | null
    deploymentName: string | null
    deployVariableRawInput: boolean | null
    deploymentRollbackValidation: boolean | null
    preHookEnabled: boolean | null
    postHookEnabled: boolean | null
    imagePullPolicy: $Enums.ImagePullPolicy | null
    resourceKind: $Enums.ResourceKind | null
    queueName: string | null
    projectEnvironmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: number | null
    serviceName: string | null
    deploymentName: string | null
    deployVariableRawInput: boolean | null
    deploymentRollbackValidation: boolean | null
    preHookEnabled: boolean | null
    postHookEnabled: boolean | null
    imagePullPolicy: $Enums.ImagePullPolicy | null
    resourceKind: $Enums.ResourceKind | null
    queueName: string | null
    projectEnvironmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    serviceName: number
    deploymentName: number
    deployVariableRawInput: number
    deploymentRollbackValidation: number
    deploymentNames: number
    preHookEnabled: number
    postHookEnabled: number
    imagePullPolicy: number
    resourceKind: number
    envCdHook: number
    queueName: number
    manifestMetaData: number
    envCdDeploymentStrategy: number
    envCdDeployVariable: number
    projectEnvironmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeploymentAvgAggregateInputType = {
    id?: true
    projectEnvironmentId?: true
  }

  export type DeploymentSumAggregateInputType = {
    id?: true
    projectEnvironmentId?: true
  }

  export type DeploymentMinAggregateInputType = {
    id?: true
    serviceName?: true
    deploymentName?: true
    deployVariableRawInput?: true
    deploymentRollbackValidation?: true
    preHookEnabled?: true
    postHookEnabled?: true
    imagePullPolicy?: true
    resourceKind?: true
    queueName?: true
    projectEnvironmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    serviceName?: true
    deploymentName?: true
    deployVariableRawInput?: true
    deploymentRollbackValidation?: true
    preHookEnabled?: true
    postHookEnabled?: true
    imagePullPolicy?: true
    resourceKind?: true
    queueName?: true
    projectEnvironmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    serviceName?: true
    deploymentName?: true
    deployVariableRawInput?: true
    deploymentRollbackValidation?: true
    deploymentNames?: true
    preHookEnabled?: true
    postHookEnabled?: true
    imagePullPolicy?: true
    resourceKind?: true
    envCdHook?: true
    queueName?: true
    manifestMetaData?: true
    envCdDeploymentStrategy?: true
    envCdDeployVariable?: true
    projectEnvironmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployment to aggregate.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeploymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeploymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type DeploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithAggregationInput | DeploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: DeploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _avg?: DeploymentAvgAggregateInputType
    _sum?: DeploymentSumAggregateInputType
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: number
    serviceName: string
    deploymentName: string
    deployVariableRawInput: boolean
    deploymentRollbackValidation: boolean
    deploymentNames: string[]
    preHookEnabled: boolean
    postHookEnabled: boolean
    imagePullPolicy: $Enums.ImagePullPolicy
    resourceKind: $Enums.ResourceKind
    envCdHook: JsonValue
    queueName: string | null
    manifestMetaData: JsonValue
    envCdDeploymentStrategy: JsonValue
    envCdDeployVariable: JsonValue
    projectEnvironmentId: number
    createdAt: Date
    updatedAt: Date
    _count: DeploymentCountAggregateOutputType | null
    _avg: DeploymentAvgAggregateOutputType | null
    _sum: DeploymentSumAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends DeploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceName?: boolean
    deploymentName?: boolean
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: boolean
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: boolean
    resourceKind?: boolean
    envCdHook?: boolean
    queueName?: boolean
    manifestMetaData?: boolean
    envCdDeploymentStrategy?: boolean
    envCdDeployVariable?: boolean
    projectEnvironmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceName?: boolean
    deploymentName?: boolean
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: boolean
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: boolean
    resourceKind?: boolean
    envCdHook?: boolean
    queueName?: boolean
    manifestMetaData?: boolean
    envCdDeploymentStrategy?: boolean
    envCdDeployVariable?: boolean
    projectEnvironmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    serviceName?: boolean
    deploymentName?: boolean
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: boolean
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: boolean
    resourceKind?: boolean
    envCdHook?: boolean
    queueName?: boolean
    manifestMetaData?: boolean
    envCdDeploymentStrategy?: boolean
    envCdDeployVariable?: boolean
    projectEnvironmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironment?: boolean | ProjectEnvironmentDefaultArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      projectEnvironment: Prisma.$ProjectEnvironmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceName: string
      deploymentName: string
      deployVariableRawInput: boolean
      deploymentRollbackValidation: boolean
      deploymentNames: string[]
      preHookEnabled: boolean
      postHookEnabled: boolean
      imagePullPolicy: $Enums.ImagePullPolicy
      resourceKind: $Enums.ResourceKind
      envCdHook: Prisma.JsonValue
      queueName: string | null
      manifestMetaData: Prisma.JsonValue
      envCdDeploymentStrategy: Prisma.JsonValue
      envCdDeployVariable: Prisma.JsonValue
      projectEnvironmentId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type DeploymentGetPayload<S extends boolean | null | undefined | DeploymentDefaultArgs> = $Result.GetResult<Prisma.$DeploymentPayload, S>

  type DeploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeploymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface DeploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deployment'], meta: { name: 'Deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {DeploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentFindUniqueArgs>(args: SelectSubset<T, DeploymentFindUniqueArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentFindFirstArgs>(args?: SelectSubset<T, DeploymentFindFirstArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentFindManyArgs>(args?: SelectSubset<T, DeploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deployment.
     * @param {DeploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends DeploymentCreateArgs>(args: SelectSubset<T, DeploymentCreateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deployments.
     * @param {DeploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentCreateManyArgs>(args?: SelectSubset<T, DeploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {DeploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deployment.
     * @param {DeploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends DeploymentDeleteArgs>(args: SelectSubset<T, DeploymentDeleteArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deployment.
     * @param {DeploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentUpdateArgs>(args: SelectSubset<T, DeploymentUpdateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deployments.
     * @param {DeploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentDeleteManyArgs>(args?: SelectSubset<T, DeploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentUpdateManyArgs>(args: SelectSubset<T, DeploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deployment.
     * @param {DeploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentUpsertArgs>(args: SelectSubset<T, DeploymentUpsertArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends DeploymentCountArgs>(
      args?: Subset<T, DeploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deployment model
   */
  readonly fields: DeploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironment<T extends ProjectEnvironmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEnvironmentDefaultArgs<ExtArgs>>): Prisma__ProjectEnvironmentClient<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deployment model
   */ 
  interface DeploymentFieldRefs {
    readonly id: FieldRef<"Deployment", 'Int'>
    readonly serviceName: FieldRef<"Deployment", 'String'>
    readonly deploymentName: FieldRef<"Deployment", 'String'>
    readonly deployVariableRawInput: FieldRef<"Deployment", 'Boolean'>
    readonly deploymentRollbackValidation: FieldRef<"Deployment", 'Boolean'>
    readonly deploymentNames: FieldRef<"Deployment", 'String[]'>
    readonly preHookEnabled: FieldRef<"Deployment", 'Boolean'>
    readonly postHookEnabled: FieldRef<"Deployment", 'Boolean'>
    readonly imagePullPolicy: FieldRef<"Deployment", 'ImagePullPolicy'>
    readonly resourceKind: FieldRef<"Deployment", 'ResourceKind'>
    readonly envCdHook: FieldRef<"Deployment", 'Json'>
    readonly queueName: FieldRef<"Deployment", 'String'>
    readonly manifestMetaData: FieldRef<"Deployment", 'Json'>
    readonly envCdDeploymentStrategy: FieldRef<"Deployment", 'Json'>
    readonly envCdDeployVariable: FieldRef<"Deployment", 'Json'>
    readonly projectEnvironmentId: FieldRef<"Deployment", 'Int'>
    readonly createdAt: FieldRef<"Deployment", 'DateTime'>
    readonly updatedAt: FieldRef<"Deployment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deployment findUnique
   */
  export type DeploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findUniqueOrThrow
   */
  export type DeploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findFirst
   */
  export type DeploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findFirstOrThrow
   */
  export type DeploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findMany
   */
  export type DeploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployments to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment create
   */
  export type DeploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Deployment.
     */
    data: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
  }

  /**
   * Deployment createMany
   */
  export type DeploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deployment createManyAndReturn
   */
  export type DeploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment update
   */
  export type DeploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Deployment.
     */
    data: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
    /**
     * Choose, which Deployment to update.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment updateMany
   */
  export type DeploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
  }

  /**
   * Deployment upsert
   */
  export type DeploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Deployment to update in case it exists.
     */
    where: DeploymentWhereUniqueInput
    /**
     * In case the Deployment found by the `where` argument doesn't exist, create a new Deployment with this data.
     */
    create: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
    /**
     * In case the Deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
  }

  /**
   * Deployment delete
   */
  export type DeploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter which Deployment to delete.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment deleteMany
   */
  export type DeploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployments to delete
     */
    where?: DeploymentWhereInput
  }

  /**
   * Deployment without action
   */
  export type DeploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
  }


  /**
   * Model Cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterAvgAggregateOutputType = {
    id: number | null
  }

  export type ClusterSumAggregateOutputType = {
    id: number | null
  }

  export type ClusterMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClusterAvgAggregateInputType = {
    id?: true
  }

  export type ClusterSumAggregateInputType = {
    id?: true
  }

  export type ClusterMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cluster to aggregate.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type ClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithAggregationInput | ClusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: ClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _avg?: ClusterAvgAggregateInputType
    _sum?: ClusterSumAggregateInputType
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type ClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironments?: boolean | Cluster$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | Cluster$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cluster"
    objects: {
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = $Result.GetResult<Prisma.$ClusterPayload, S>

  type ClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface ClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterFindUniqueArgs>(args: SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterFindFirstArgs>(args?: SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClusterFindManyArgs>(args?: SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cluster.
     * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends ClusterCreateArgs>(args: SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clusters.
     * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterCreateManyArgs>(args?: SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cluster.
     * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends ClusterDeleteArgs>(args: SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cluster.
     * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterUpdateArgs>(args: SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clusters.
     * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterDeleteManyArgs>(args?: SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterUpdateManyArgs>(args: SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cluster.
     * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends ClusterUpsertArgs>(args: SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends ClusterCountArgs>(
      args?: Subset<T, ClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterGroupByArgs['orderBy'] }
        : { orderBy?: ClusterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cluster model
   */
  readonly fields: ClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironments<T extends Cluster$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cluster model
   */ 
  interface ClusterFieldRefs {
    readonly id: FieldRef<"Cluster", 'Int'>
    readonly name: FieldRef<"Cluster", 'String'>
    readonly createdAt: FieldRef<"Cluster", 'DateTime'>
    readonly updatedAt: FieldRef<"Cluster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cluster findUnique
   */
  export type ClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findUniqueOrThrow
   */
  export type ClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findFirst
   */
  export type ClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findFirstOrThrow
   */
  export type ClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findMany
   */
  export type ClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Clusters to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster create
   */
  export type ClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to create a Cluster.
     */
    data: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
  }

  /**
   * Cluster createMany
   */
  export type ClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster createManyAndReturn
   */
  export type ClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster update
   */
  export type ClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to update a Cluster.
     */
    data: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
    /**
     * Choose, which Cluster to update.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster updateMany
   */
  export type ClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
  }

  /**
   * Cluster upsert
   */
  export type ClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The filter to search for the Cluster to update in case it exists.
     */
    where: ClusterWhereUniqueInput
    /**
     * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
     */
    create: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
    /**
     * In case the Cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
  }

  /**
   * Cluster delete
   */
  export type ClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter which Cluster to delete.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster deleteMany
   */
  export type ClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clusters to delete
     */
    where?: ClusterWhereInput
  }

  /**
   * Cluster.projectEnvironments
   */
  export type Cluster$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * Cluster without action
   */
  export type ClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
  }


  /**
   * Model Namespace
   */

  export type AggregateNamespace = {
    _count: NamespaceCountAggregateOutputType | null
    _avg: NamespaceAvgAggregateOutputType | null
    _sum: NamespaceSumAggregateOutputType | null
    _min: NamespaceMinAggregateOutputType | null
    _max: NamespaceMaxAggregateOutputType | null
  }

  export type NamespaceAvgAggregateOutputType = {
    id: number | null
  }

  export type NamespaceSumAggregateOutputType = {
    id: number | null
  }

  export type NamespaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NamespaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NamespaceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NamespaceAvgAggregateInputType = {
    id?: true
  }

  export type NamespaceSumAggregateInputType = {
    id?: true
  }

  export type NamespaceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NamespaceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NamespaceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NamespaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Namespace to aggregate.
     */
    where?: NamespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Namespaces to fetch.
     */
    orderBy?: NamespaceOrderByWithRelationInput | NamespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NamespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Namespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Namespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Namespaces
    **/
    _count?: true | NamespaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NamespaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NamespaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NamespaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NamespaceMaxAggregateInputType
  }

  export type GetNamespaceAggregateType<T extends NamespaceAggregateArgs> = {
        [P in keyof T & keyof AggregateNamespace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNamespace[P]>
      : GetScalarType<T[P], AggregateNamespace[P]>
  }




  export type NamespaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NamespaceWhereInput
    orderBy?: NamespaceOrderByWithAggregationInput | NamespaceOrderByWithAggregationInput[]
    by: NamespaceScalarFieldEnum[] | NamespaceScalarFieldEnum
    having?: NamespaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NamespaceCountAggregateInputType | true
    _avg?: NamespaceAvgAggregateInputType
    _sum?: NamespaceSumAggregateInputType
    _min?: NamespaceMinAggregateInputType
    _max?: NamespaceMaxAggregateInputType
  }

  export type NamespaceGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: NamespaceCountAggregateOutputType | null
    _avg: NamespaceAvgAggregateOutputType | null
    _sum: NamespaceSumAggregateOutputType | null
    _min: NamespaceMinAggregateOutputType | null
    _max: NamespaceMaxAggregateOutputType | null
  }

  type GetNamespaceGroupByPayload<T extends NamespaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NamespaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NamespaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NamespaceGroupByOutputType[P]>
            : GetScalarType<T[P], NamespaceGroupByOutputType[P]>
        }
      >
    >


  export type NamespaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironments?: boolean | Namespace$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | NamespaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["namespace"]>

  export type NamespaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["namespace"]>

  export type NamespaceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NamespaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | Namespace$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | NamespaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NamespaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NamespacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Namespace"
    objects: {
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["namespace"]>
    composites: {}
  }

  type NamespaceGetPayload<S extends boolean | null | undefined | NamespaceDefaultArgs> = $Result.GetResult<Prisma.$NamespacePayload, S>

  type NamespaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NamespaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NamespaceCountAggregateInputType | true
    }

  export interface NamespaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Namespace'], meta: { name: 'Namespace' } }
    /**
     * Find zero or one Namespace that matches the filter.
     * @param {NamespaceFindUniqueArgs} args - Arguments to find a Namespace
     * @example
     * // Get one Namespace
     * const namespace = await prisma.namespace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NamespaceFindUniqueArgs>(args: SelectSubset<T, NamespaceFindUniqueArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Namespace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NamespaceFindUniqueOrThrowArgs} args - Arguments to find a Namespace
     * @example
     * // Get one Namespace
     * const namespace = await prisma.namespace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NamespaceFindUniqueOrThrowArgs>(args: SelectSubset<T, NamespaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Namespace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceFindFirstArgs} args - Arguments to find a Namespace
     * @example
     * // Get one Namespace
     * const namespace = await prisma.namespace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NamespaceFindFirstArgs>(args?: SelectSubset<T, NamespaceFindFirstArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Namespace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceFindFirstOrThrowArgs} args - Arguments to find a Namespace
     * @example
     * // Get one Namespace
     * const namespace = await prisma.namespace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NamespaceFindFirstOrThrowArgs>(args?: SelectSubset<T, NamespaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Namespaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Namespaces
     * const namespaces = await prisma.namespace.findMany()
     * 
     * // Get first 10 Namespaces
     * const namespaces = await prisma.namespace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const namespaceWithIdOnly = await prisma.namespace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NamespaceFindManyArgs>(args?: SelectSubset<T, NamespaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Namespace.
     * @param {NamespaceCreateArgs} args - Arguments to create a Namespace.
     * @example
     * // Create one Namespace
     * const Namespace = await prisma.namespace.create({
     *   data: {
     *     // ... data to create a Namespace
     *   }
     * })
     * 
     */
    create<T extends NamespaceCreateArgs>(args: SelectSubset<T, NamespaceCreateArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Namespaces.
     * @param {NamespaceCreateManyArgs} args - Arguments to create many Namespaces.
     * @example
     * // Create many Namespaces
     * const namespace = await prisma.namespace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NamespaceCreateManyArgs>(args?: SelectSubset<T, NamespaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Namespaces and returns the data saved in the database.
     * @param {NamespaceCreateManyAndReturnArgs} args - Arguments to create many Namespaces.
     * @example
     * // Create many Namespaces
     * const namespace = await prisma.namespace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Namespaces and only return the `id`
     * const namespaceWithIdOnly = await prisma.namespace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NamespaceCreateManyAndReturnArgs>(args?: SelectSubset<T, NamespaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Namespace.
     * @param {NamespaceDeleteArgs} args - Arguments to delete one Namespace.
     * @example
     * // Delete one Namespace
     * const Namespace = await prisma.namespace.delete({
     *   where: {
     *     // ... filter to delete one Namespace
     *   }
     * })
     * 
     */
    delete<T extends NamespaceDeleteArgs>(args: SelectSubset<T, NamespaceDeleteArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Namespace.
     * @param {NamespaceUpdateArgs} args - Arguments to update one Namespace.
     * @example
     * // Update one Namespace
     * const namespace = await prisma.namespace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NamespaceUpdateArgs>(args: SelectSubset<T, NamespaceUpdateArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Namespaces.
     * @param {NamespaceDeleteManyArgs} args - Arguments to filter Namespaces to delete.
     * @example
     * // Delete a few Namespaces
     * const { count } = await prisma.namespace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NamespaceDeleteManyArgs>(args?: SelectSubset<T, NamespaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Namespaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Namespaces
     * const namespace = await prisma.namespace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NamespaceUpdateManyArgs>(args: SelectSubset<T, NamespaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Namespace.
     * @param {NamespaceUpsertArgs} args - Arguments to update or create a Namespace.
     * @example
     * // Update or create a Namespace
     * const namespace = await prisma.namespace.upsert({
     *   create: {
     *     // ... data to create a Namespace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Namespace we want to update
     *   }
     * })
     */
    upsert<T extends NamespaceUpsertArgs>(args: SelectSubset<T, NamespaceUpsertArgs<ExtArgs>>): Prisma__NamespaceClient<$Result.GetResult<Prisma.$NamespacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Namespaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceCountArgs} args - Arguments to filter Namespaces to count.
     * @example
     * // Count the number of Namespaces
     * const count = await prisma.namespace.count({
     *   where: {
     *     // ... the filter for the Namespaces we want to count
     *   }
     * })
    **/
    count<T extends NamespaceCountArgs>(
      args?: Subset<T, NamespaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NamespaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Namespace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NamespaceAggregateArgs>(args: Subset<T, NamespaceAggregateArgs>): Prisma.PrismaPromise<GetNamespaceAggregateType<T>>

    /**
     * Group by Namespace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamespaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NamespaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NamespaceGroupByArgs['orderBy'] }
        : { orderBy?: NamespaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NamespaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamespaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Namespace model
   */
  readonly fields: NamespaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Namespace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NamespaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironments<T extends Namespace$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Namespace$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Namespace model
   */ 
  interface NamespaceFieldRefs {
    readonly id: FieldRef<"Namespace", 'Int'>
    readonly name: FieldRef<"Namespace", 'String'>
    readonly createdAt: FieldRef<"Namespace", 'DateTime'>
    readonly updatedAt: FieldRef<"Namespace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Namespace findUnique
   */
  export type NamespaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter, which Namespace to fetch.
     */
    where: NamespaceWhereUniqueInput
  }

  /**
   * Namespace findUniqueOrThrow
   */
  export type NamespaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter, which Namespace to fetch.
     */
    where: NamespaceWhereUniqueInput
  }

  /**
   * Namespace findFirst
   */
  export type NamespaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter, which Namespace to fetch.
     */
    where?: NamespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Namespaces to fetch.
     */
    orderBy?: NamespaceOrderByWithRelationInput | NamespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Namespaces.
     */
    cursor?: NamespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Namespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Namespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Namespaces.
     */
    distinct?: NamespaceScalarFieldEnum | NamespaceScalarFieldEnum[]
  }

  /**
   * Namespace findFirstOrThrow
   */
  export type NamespaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter, which Namespace to fetch.
     */
    where?: NamespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Namespaces to fetch.
     */
    orderBy?: NamespaceOrderByWithRelationInput | NamespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Namespaces.
     */
    cursor?: NamespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Namespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Namespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Namespaces.
     */
    distinct?: NamespaceScalarFieldEnum | NamespaceScalarFieldEnum[]
  }

  /**
   * Namespace findMany
   */
  export type NamespaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter, which Namespaces to fetch.
     */
    where?: NamespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Namespaces to fetch.
     */
    orderBy?: NamespaceOrderByWithRelationInput | NamespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Namespaces.
     */
    cursor?: NamespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Namespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Namespaces.
     */
    skip?: number
    distinct?: NamespaceScalarFieldEnum | NamespaceScalarFieldEnum[]
  }

  /**
   * Namespace create
   */
  export type NamespaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Namespace.
     */
    data: XOR<NamespaceCreateInput, NamespaceUncheckedCreateInput>
  }

  /**
   * Namespace createMany
   */
  export type NamespaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Namespaces.
     */
    data: NamespaceCreateManyInput | NamespaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Namespace createManyAndReturn
   */
  export type NamespaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Namespaces.
     */
    data: NamespaceCreateManyInput | NamespaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Namespace update
   */
  export type NamespaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Namespace.
     */
    data: XOR<NamespaceUpdateInput, NamespaceUncheckedUpdateInput>
    /**
     * Choose, which Namespace to update.
     */
    where: NamespaceWhereUniqueInput
  }

  /**
   * Namespace updateMany
   */
  export type NamespaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Namespaces.
     */
    data: XOR<NamespaceUpdateManyMutationInput, NamespaceUncheckedUpdateManyInput>
    /**
     * Filter which Namespaces to update
     */
    where?: NamespaceWhereInput
  }

  /**
   * Namespace upsert
   */
  export type NamespaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Namespace to update in case it exists.
     */
    where: NamespaceWhereUniqueInput
    /**
     * In case the Namespace found by the `where` argument doesn't exist, create a new Namespace with this data.
     */
    create: XOR<NamespaceCreateInput, NamespaceUncheckedCreateInput>
    /**
     * In case the Namespace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NamespaceUpdateInput, NamespaceUncheckedUpdateInput>
  }

  /**
   * Namespace delete
   */
  export type NamespaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
    /**
     * Filter which Namespace to delete.
     */
    where: NamespaceWhereUniqueInput
  }

  /**
   * Namespace deleteMany
   */
  export type NamespaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Namespaces to delete
     */
    where?: NamespaceWhereInput
  }

  /**
   * Namespace.projectEnvironments
   */
  export type Namespace$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * Namespace without action
   */
  export type NamespaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Namespace
     */
    select?: NamespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NamespaceInclude<ExtArgs> | null
  }


  /**
   * Model Registry
   */

  export type AggregateRegistry = {
    _count: RegistryCountAggregateOutputType | null
    _avg: RegistryAvgAggregateOutputType | null
    _sum: RegistrySumAggregateOutputType | null
    _min: RegistryMinAggregateOutputType | null
    _max: RegistryMaxAggregateOutputType | null
  }

  export type RegistryAvgAggregateOutputType = {
    id: number | null
  }

  export type RegistrySumAggregateOutputType = {
    id: number | null
  }

  export type RegistryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistryAvgAggregateInputType = {
    id?: true
  }

  export type RegistrySumAggregateInputType = {
    id?: true
  }

  export type RegistryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registry to aggregate.
     */
    where?: RegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registries to fetch.
     */
    orderBy?: RegistryOrderByWithRelationInput | RegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registries
    **/
    _count?: true | RegistryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistryMaxAggregateInputType
  }

  export type GetRegistryAggregateType<T extends RegistryAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistry[P]>
      : GetScalarType<T[P], AggregateRegistry[P]>
  }




  export type RegistryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistryWhereInput
    orderBy?: RegistryOrderByWithAggregationInput | RegistryOrderByWithAggregationInput[]
    by: RegistryScalarFieldEnum[] | RegistryScalarFieldEnum
    having?: RegistryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistryCountAggregateInputType | true
    _avg?: RegistryAvgAggregateInputType
    _sum?: RegistrySumAggregateInputType
    _min?: RegistryMinAggregateInputType
    _max?: RegistryMaxAggregateInputType
  }

  export type RegistryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RegistryCountAggregateOutputType | null
    _avg: RegistryAvgAggregateOutputType | null
    _sum: RegistrySumAggregateOutputType | null
    _min: RegistryMinAggregateOutputType | null
    _max: RegistryMaxAggregateOutputType | null
  }

  type GetRegistryGroupByPayload<T extends RegistryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistryGroupByOutputType[P]>
            : GetScalarType<T[P], RegistryGroupByOutputType[P]>
        }
      >
    >


  export type RegistrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironments?: boolean | Registry$projectEnvironmentsArgs<ExtArgs>
    serviceEnvironments?: boolean | Registry$serviceEnvironmentsArgs<ExtArgs>
    _count?: boolean | RegistryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registry"]>

  export type RegistrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["registry"]>

  export type RegistrySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | Registry$projectEnvironmentsArgs<ExtArgs>
    serviceEnvironments?: boolean | Registry$serviceEnvironmentsArgs<ExtArgs>
    _count?: boolean | RegistryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegistryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegistryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registry"
    objects: {
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
      serviceEnvironments: Prisma.$ServiceEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registry"]>
    composites: {}
  }

  type RegistryGetPayload<S extends boolean | null | undefined | RegistryDefaultArgs> = $Result.GetResult<Prisma.$RegistryPayload, S>

  type RegistryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistryCountAggregateInputType | true
    }

  export interface RegistryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registry'], meta: { name: 'Registry' } }
    /**
     * Find zero or one Registry that matches the filter.
     * @param {RegistryFindUniqueArgs} args - Arguments to find a Registry
     * @example
     * // Get one Registry
     * const registry = await prisma.registry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistryFindUniqueArgs>(args: SelectSubset<T, RegistryFindUniqueArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Registry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistryFindUniqueOrThrowArgs} args - Arguments to find a Registry
     * @example
     * // Get one Registry
     * const registry = await prisma.registry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistryFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Registry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryFindFirstArgs} args - Arguments to find a Registry
     * @example
     * // Get one Registry
     * const registry = await prisma.registry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistryFindFirstArgs>(args?: SelectSubset<T, RegistryFindFirstArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Registry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryFindFirstOrThrowArgs} args - Arguments to find a Registry
     * @example
     * // Get one Registry
     * const registry = await prisma.registry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistryFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Registries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registries
     * const registries = await prisma.registry.findMany()
     * 
     * // Get first 10 Registries
     * const registries = await prisma.registry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registryWithIdOnly = await prisma.registry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistryFindManyArgs>(args?: SelectSubset<T, RegistryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Registry.
     * @param {RegistryCreateArgs} args - Arguments to create a Registry.
     * @example
     * // Create one Registry
     * const Registry = await prisma.registry.create({
     *   data: {
     *     // ... data to create a Registry
     *   }
     * })
     * 
     */
    create<T extends RegistryCreateArgs>(args: SelectSubset<T, RegistryCreateArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Registries.
     * @param {RegistryCreateManyArgs} args - Arguments to create many Registries.
     * @example
     * // Create many Registries
     * const registry = await prisma.registry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistryCreateManyArgs>(args?: SelectSubset<T, RegistryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registries and returns the data saved in the database.
     * @param {RegistryCreateManyAndReturnArgs} args - Arguments to create many Registries.
     * @example
     * // Create many Registries
     * const registry = await prisma.registry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registries and only return the `id`
     * const registryWithIdOnly = await prisma.registry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistryCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Registry.
     * @param {RegistryDeleteArgs} args - Arguments to delete one Registry.
     * @example
     * // Delete one Registry
     * const Registry = await prisma.registry.delete({
     *   where: {
     *     // ... filter to delete one Registry
     *   }
     * })
     * 
     */
    delete<T extends RegistryDeleteArgs>(args: SelectSubset<T, RegistryDeleteArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Registry.
     * @param {RegistryUpdateArgs} args - Arguments to update one Registry.
     * @example
     * // Update one Registry
     * const registry = await prisma.registry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistryUpdateArgs>(args: SelectSubset<T, RegistryUpdateArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Registries.
     * @param {RegistryDeleteManyArgs} args - Arguments to filter Registries to delete.
     * @example
     * // Delete a few Registries
     * const { count } = await prisma.registry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistryDeleteManyArgs>(args?: SelectSubset<T, RegistryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registries
     * const registry = await prisma.registry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistryUpdateManyArgs>(args: SelectSubset<T, RegistryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registry.
     * @param {RegistryUpsertArgs} args - Arguments to update or create a Registry.
     * @example
     * // Update or create a Registry
     * const registry = await prisma.registry.upsert({
     *   create: {
     *     // ... data to create a Registry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registry we want to update
     *   }
     * })
     */
    upsert<T extends RegistryUpsertArgs>(args: SelectSubset<T, RegistryUpsertArgs<ExtArgs>>): Prisma__RegistryClient<$Result.GetResult<Prisma.$RegistryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Registries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryCountArgs} args - Arguments to filter Registries to count.
     * @example
     * // Count the number of Registries
     * const count = await prisma.registry.count({
     *   where: {
     *     // ... the filter for the Registries we want to count
     *   }
     * })
    **/
    count<T extends RegistryCountArgs>(
      args?: Subset<T, RegistryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistryAggregateArgs>(args: Subset<T, RegistryAggregateArgs>): Prisma.PrismaPromise<GetRegistryAggregateType<T>>

    /**
     * Group by Registry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistryGroupByArgs['orderBy'] }
        : { orderBy?: RegistryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registry model
   */
  readonly fields: RegistryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironments<T extends Registry$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Registry$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    serviceEnvironments<T extends Registry$serviceEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, Registry$serviceEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registry model
   */ 
  interface RegistryFieldRefs {
    readonly id: FieldRef<"Registry", 'Int'>
    readonly name: FieldRef<"Registry", 'String'>
    readonly createdAt: FieldRef<"Registry", 'DateTime'>
    readonly updatedAt: FieldRef<"Registry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registry findUnique
   */
  export type RegistryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter, which Registry to fetch.
     */
    where: RegistryWhereUniqueInput
  }

  /**
   * Registry findUniqueOrThrow
   */
  export type RegistryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter, which Registry to fetch.
     */
    where: RegistryWhereUniqueInput
  }

  /**
   * Registry findFirst
   */
  export type RegistryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter, which Registry to fetch.
     */
    where?: RegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registries to fetch.
     */
    orderBy?: RegistryOrderByWithRelationInput | RegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registries.
     */
    cursor?: RegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registries.
     */
    distinct?: RegistryScalarFieldEnum | RegistryScalarFieldEnum[]
  }

  /**
   * Registry findFirstOrThrow
   */
  export type RegistryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter, which Registry to fetch.
     */
    where?: RegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registries to fetch.
     */
    orderBy?: RegistryOrderByWithRelationInput | RegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registries.
     */
    cursor?: RegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registries.
     */
    distinct?: RegistryScalarFieldEnum | RegistryScalarFieldEnum[]
  }

  /**
   * Registry findMany
   */
  export type RegistryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter, which Registries to fetch.
     */
    where?: RegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registries to fetch.
     */
    orderBy?: RegistryOrderByWithRelationInput | RegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registries.
     */
    cursor?: RegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registries.
     */
    skip?: number
    distinct?: RegistryScalarFieldEnum | RegistryScalarFieldEnum[]
  }

  /**
   * Registry create
   */
  export type RegistryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * The data needed to create a Registry.
     */
    data: XOR<RegistryCreateInput, RegistryUncheckedCreateInput>
  }

  /**
   * Registry createMany
   */
  export type RegistryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registries.
     */
    data: RegistryCreateManyInput | RegistryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registry createManyAndReturn
   */
  export type RegistryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Registries.
     */
    data: RegistryCreateManyInput | RegistryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registry update
   */
  export type RegistryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * The data needed to update a Registry.
     */
    data: XOR<RegistryUpdateInput, RegistryUncheckedUpdateInput>
    /**
     * Choose, which Registry to update.
     */
    where: RegistryWhereUniqueInput
  }

  /**
   * Registry updateMany
   */
  export type RegistryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registries.
     */
    data: XOR<RegistryUpdateManyMutationInput, RegistryUncheckedUpdateManyInput>
    /**
     * Filter which Registries to update
     */
    where?: RegistryWhereInput
  }

  /**
   * Registry upsert
   */
  export type RegistryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * The filter to search for the Registry to update in case it exists.
     */
    where: RegistryWhereUniqueInput
    /**
     * In case the Registry found by the `where` argument doesn't exist, create a new Registry with this data.
     */
    create: XOR<RegistryCreateInput, RegistryUncheckedCreateInput>
    /**
     * In case the Registry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistryUpdateInput, RegistryUncheckedUpdateInput>
  }

  /**
   * Registry delete
   */
  export type RegistryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
    /**
     * Filter which Registry to delete.
     */
    where: RegistryWhereUniqueInput
  }

  /**
   * Registry deleteMany
   */
  export type RegistryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registries to delete
     */
    where?: RegistryWhereInput
  }

  /**
   * Registry.projectEnvironments
   */
  export type Registry$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * Registry.serviceEnvironments
   */
  export type Registry$serviceEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEnvironment
     */
    select?: ServiceEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceEnvironmentInclude<ExtArgs> | null
    where?: ServiceEnvironmentWhereInput
    orderBy?: ServiceEnvironmentOrderByWithRelationInput | ServiceEnvironmentOrderByWithRelationInput[]
    cursor?: ServiceEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceEnvironmentScalarFieldEnum | ServiceEnvironmentScalarFieldEnum[]
  }

  /**
   * Registry without action
   */
  export type RegistryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registry
     */
    select?: RegistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistryInclude<ExtArgs> | null
  }


  /**
   * Model VmGroup
   */

  export type AggregateVmGroup = {
    _count: VmGroupCountAggregateOutputType | null
    _avg: VmGroupAvgAggregateOutputType | null
    _sum: VmGroupSumAggregateOutputType | null
    _min: VmGroupMinAggregateOutputType | null
    _max: VmGroupMaxAggregateOutputType | null
  }

  export type VmGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type VmGroupSumAggregateOutputType = {
    id: number | null
  }

  export type VmGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VmGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VmGroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VmGroupAvgAggregateInputType = {
    id?: true
  }

  export type VmGroupSumAggregateInputType = {
    id?: true
  }

  export type VmGroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VmGroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VmGroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VmGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VmGroup to aggregate.
     */
    where?: VmGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VmGroups to fetch.
     */
    orderBy?: VmGroupOrderByWithRelationInput | VmGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VmGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VmGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VmGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VmGroups
    **/
    _count?: true | VmGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VmGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VmGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VmGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VmGroupMaxAggregateInputType
  }

  export type GetVmGroupAggregateType<T extends VmGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateVmGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVmGroup[P]>
      : GetScalarType<T[P], AggregateVmGroup[P]>
  }




  export type VmGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VmGroupWhereInput
    orderBy?: VmGroupOrderByWithAggregationInput | VmGroupOrderByWithAggregationInput[]
    by: VmGroupScalarFieldEnum[] | VmGroupScalarFieldEnum
    having?: VmGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VmGroupCountAggregateInputType | true
    _avg?: VmGroupAvgAggregateInputType
    _sum?: VmGroupSumAggregateInputType
    _min?: VmGroupMinAggregateInputType
    _max?: VmGroupMaxAggregateInputType
  }

  export type VmGroupGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: VmGroupCountAggregateOutputType | null
    _avg: VmGroupAvgAggregateOutputType | null
    _sum: VmGroupSumAggregateOutputType | null
    _min: VmGroupMinAggregateOutputType | null
    _max: VmGroupMaxAggregateOutputType | null
  }

  type GetVmGroupGroupByPayload<T extends VmGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VmGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VmGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VmGroupGroupByOutputType[P]>
            : GetScalarType<T[P], VmGroupGroupByOutputType[P]>
        }
      >
    >


  export type VmGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectEnvironments?: boolean | VmGroup$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | VmGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vmGroup"]>

  export type VmGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vmGroup"]>

  export type VmGroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VmGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectEnvironments?: boolean | VmGroup$projectEnvironmentsArgs<ExtArgs>
    _count?: boolean | VmGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VmGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VmGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VmGroup"
    objects: {
      projectEnvironments: Prisma.$ProjectEnvironmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vmGroup"]>
    composites: {}
  }

  type VmGroupGetPayload<S extends boolean | null | undefined | VmGroupDefaultArgs> = $Result.GetResult<Prisma.$VmGroupPayload, S>

  type VmGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VmGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VmGroupCountAggregateInputType | true
    }

  export interface VmGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VmGroup'], meta: { name: 'VmGroup' } }
    /**
     * Find zero or one VmGroup that matches the filter.
     * @param {VmGroupFindUniqueArgs} args - Arguments to find a VmGroup
     * @example
     * // Get one VmGroup
     * const vmGroup = await prisma.vmGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VmGroupFindUniqueArgs>(args: SelectSubset<T, VmGroupFindUniqueArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VmGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VmGroupFindUniqueOrThrowArgs} args - Arguments to find a VmGroup
     * @example
     * // Get one VmGroup
     * const vmGroup = await prisma.vmGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VmGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, VmGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VmGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupFindFirstArgs} args - Arguments to find a VmGroup
     * @example
     * // Get one VmGroup
     * const vmGroup = await prisma.vmGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VmGroupFindFirstArgs>(args?: SelectSubset<T, VmGroupFindFirstArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VmGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupFindFirstOrThrowArgs} args - Arguments to find a VmGroup
     * @example
     * // Get one VmGroup
     * const vmGroup = await prisma.vmGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VmGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, VmGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VmGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VmGroups
     * const vmGroups = await prisma.vmGroup.findMany()
     * 
     * // Get first 10 VmGroups
     * const vmGroups = await prisma.vmGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vmGroupWithIdOnly = await prisma.vmGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VmGroupFindManyArgs>(args?: SelectSubset<T, VmGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VmGroup.
     * @param {VmGroupCreateArgs} args - Arguments to create a VmGroup.
     * @example
     * // Create one VmGroup
     * const VmGroup = await prisma.vmGroup.create({
     *   data: {
     *     // ... data to create a VmGroup
     *   }
     * })
     * 
     */
    create<T extends VmGroupCreateArgs>(args: SelectSubset<T, VmGroupCreateArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VmGroups.
     * @param {VmGroupCreateManyArgs} args - Arguments to create many VmGroups.
     * @example
     * // Create many VmGroups
     * const vmGroup = await prisma.vmGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VmGroupCreateManyArgs>(args?: SelectSubset<T, VmGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VmGroups and returns the data saved in the database.
     * @param {VmGroupCreateManyAndReturnArgs} args - Arguments to create many VmGroups.
     * @example
     * // Create many VmGroups
     * const vmGroup = await prisma.vmGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VmGroups and only return the `id`
     * const vmGroupWithIdOnly = await prisma.vmGroup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VmGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, VmGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VmGroup.
     * @param {VmGroupDeleteArgs} args - Arguments to delete one VmGroup.
     * @example
     * // Delete one VmGroup
     * const VmGroup = await prisma.vmGroup.delete({
     *   where: {
     *     // ... filter to delete one VmGroup
     *   }
     * })
     * 
     */
    delete<T extends VmGroupDeleteArgs>(args: SelectSubset<T, VmGroupDeleteArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VmGroup.
     * @param {VmGroupUpdateArgs} args - Arguments to update one VmGroup.
     * @example
     * // Update one VmGroup
     * const vmGroup = await prisma.vmGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VmGroupUpdateArgs>(args: SelectSubset<T, VmGroupUpdateArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VmGroups.
     * @param {VmGroupDeleteManyArgs} args - Arguments to filter VmGroups to delete.
     * @example
     * // Delete a few VmGroups
     * const { count } = await prisma.vmGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VmGroupDeleteManyArgs>(args?: SelectSubset<T, VmGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VmGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VmGroups
     * const vmGroup = await prisma.vmGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VmGroupUpdateManyArgs>(args: SelectSubset<T, VmGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VmGroup.
     * @param {VmGroupUpsertArgs} args - Arguments to update or create a VmGroup.
     * @example
     * // Update or create a VmGroup
     * const vmGroup = await prisma.vmGroup.upsert({
     *   create: {
     *     // ... data to create a VmGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VmGroup we want to update
     *   }
     * })
     */
    upsert<T extends VmGroupUpsertArgs>(args: SelectSubset<T, VmGroupUpsertArgs<ExtArgs>>): Prisma__VmGroupClient<$Result.GetResult<Prisma.$VmGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VmGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupCountArgs} args - Arguments to filter VmGroups to count.
     * @example
     * // Count the number of VmGroups
     * const count = await prisma.vmGroup.count({
     *   where: {
     *     // ... the filter for the VmGroups we want to count
     *   }
     * })
    **/
    count<T extends VmGroupCountArgs>(
      args?: Subset<T, VmGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VmGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VmGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VmGroupAggregateArgs>(args: Subset<T, VmGroupAggregateArgs>): Prisma.PrismaPromise<GetVmGroupAggregateType<T>>

    /**
     * Group by VmGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VmGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VmGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VmGroupGroupByArgs['orderBy'] }
        : { orderBy?: VmGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VmGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVmGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VmGroup model
   */
  readonly fields: VmGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VmGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VmGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectEnvironments<T extends VmGroup$projectEnvironmentsArgs<ExtArgs> = {}>(args?: Subset<T, VmGroup$projectEnvironmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEnvironmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VmGroup model
   */ 
  interface VmGroupFieldRefs {
    readonly id: FieldRef<"VmGroup", 'Int'>
    readonly name: FieldRef<"VmGroup", 'String'>
    readonly createdAt: FieldRef<"VmGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"VmGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VmGroup findUnique
   */
  export type VmGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter, which VmGroup to fetch.
     */
    where: VmGroupWhereUniqueInput
  }

  /**
   * VmGroup findUniqueOrThrow
   */
  export type VmGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter, which VmGroup to fetch.
     */
    where: VmGroupWhereUniqueInput
  }

  /**
   * VmGroup findFirst
   */
  export type VmGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter, which VmGroup to fetch.
     */
    where?: VmGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VmGroups to fetch.
     */
    orderBy?: VmGroupOrderByWithRelationInput | VmGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VmGroups.
     */
    cursor?: VmGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VmGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VmGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VmGroups.
     */
    distinct?: VmGroupScalarFieldEnum | VmGroupScalarFieldEnum[]
  }

  /**
   * VmGroup findFirstOrThrow
   */
  export type VmGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter, which VmGroup to fetch.
     */
    where?: VmGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VmGroups to fetch.
     */
    orderBy?: VmGroupOrderByWithRelationInput | VmGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VmGroups.
     */
    cursor?: VmGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VmGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VmGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VmGroups.
     */
    distinct?: VmGroupScalarFieldEnum | VmGroupScalarFieldEnum[]
  }

  /**
   * VmGroup findMany
   */
  export type VmGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter, which VmGroups to fetch.
     */
    where?: VmGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VmGroups to fetch.
     */
    orderBy?: VmGroupOrderByWithRelationInput | VmGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VmGroups.
     */
    cursor?: VmGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VmGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VmGroups.
     */
    skip?: number
    distinct?: VmGroupScalarFieldEnum | VmGroupScalarFieldEnum[]
  }

  /**
   * VmGroup create
   */
  export type VmGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a VmGroup.
     */
    data: XOR<VmGroupCreateInput, VmGroupUncheckedCreateInput>
  }

  /**
   * VmGroup createMany
   */
  export type VmGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VmGroups.
     */
    data: VmGroupCreateManyInput | VmGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VmGroup createManyAndReturn
   */
  export type VmGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VmGroups.
     */
    data: VmGroupCreateManyInput | VmGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VmGroup update
   */
  export type VmGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a VmGroup.
     */
    data: XOR<VmGroupUpdateInput, VmGroupUncheckedUpdateInput>
    /**
     * Choose, which VmGroup to update.
     */
    where: VmGroupWhereUniqueInput
  }

  /**
   * VmGroup updateMany
   */
  export type VmGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VmGroups.
     */
    data: XOR<VmGroupUpdateManyMutationInput, VmGroupUncheckedUpdateManyInput>
    /**
     * Filter which VmGroups to update
     */
    where?: VmGroupWhereInput
  }

  /**
   * VmGroup upsert
   */
  export type VmGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the VmGroup to update in case it exists.
     */
    where: VmGroupWhereUniqueInput
    /**
     * In case the VmGroup found by the `where` argument doesn't exist, create a new VmGroup with this data.
     */
    create: XOR<VmGroupCreateInput, VmGroupUncheckedCreateInput>
    /**
     * In case the VmGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VmGroupUpdateInput, VmGroupUncheckedUpdateInput>
  }

  /**
   * VmGroup delete
   */
  export type VmGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
    /**
     * Filter which VmGroup to delete.
     */
    where: VmGroupWhereUniqueInput
  }

  /**
   * VmGroup deleteMany
   */
  export type VmGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VmGroups to delete
     */
    where?: VmGroupWhereInput
  }

  /**
   * VmGroup.projectEnvironments
   */
  export type VmGroup$projectEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEnvironment
     */
    select?: ProjectEnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEnvironmentInclude<ExtArgs> | null
    where?: ProjectEnvironmentWhereInput
    orderBy?: ProjectEnvironmentOrderByWithRelationInput | ProjectEnvironmentOrderByWithRelationInput[]
    cursor?: ProjectEnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEnvironmentScalarFieldEnum | ProjectEnvironmentScalarFieldEnum[]
  }

  /**
   * VmGroup without action
   */
  export type VmGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VmGroup
     */
    select?: VmGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VmGroupInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    buildStrategy: 'buildStrategy',
    type: 'type',
    status: 'status',
    repoUrl: 'repoUrl',
    businessFunction: 'businessFunction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const EnvironmentMasterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    manualBuild: 'manualBuild',
    manualDeploy: 'manualDeploy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentMasterScalarFieldEnum = (typeof EnvironmentMasterScalarFieldEnum)[keyof typeof EnvironmentMasterScalarFieldEnum]


  export const ProjectEnvironmentScalarFieldEnum: {
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

  export type ProjectEnvironmentScalarFieldEnum = (typeof ProjectEnvironmentScalarFieldEnum)[keyof typeof ProjectEnvironmentScalarFieldEnum]


  export const ServiceEnvironmentScalarFieldEnum: {
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

  export type ServiceEnvironmentScalarFieldEnum = (typeof ServiceEnvironmentScalarFieldEnum)[keyof typeof ServiceEnvironmentScalarFieldEnum]


  export const BuildDetailsScalarFieldEnum: {
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

  export type BuildDetailsScalarFieldEnum = (typeof BuildDetailsScalarFieldEnum)[keyof typeof BuildDetailsScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
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

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const ClusterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const NamespaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NamespaceScalarFieldEnum = (typeof NamespaceScalarFieldEnum)[keyof typeof NamespaceScalarFieldEnum]


  export const RegistryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistryScalarFieldEnum = (typeof RegistryScalarFieldEnum)[keyof typeof RegistryScalarFieldEnum]


  export const VmGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VmGroupScalarFieldEnum = (typeof VmGroupScalarFieldEnum)[keyof typeof VmGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BuildStrategy'
   */
  export type EnumBuildStrategyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStrategy'>
    


  /**
   * Reference to a field of type 'BuildStrategy[]'
   */
  export type ListEnumBuildStrategyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStrategy[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ImagePullPolicy'
   */
  export type EnumImagePullPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImagePullPolicy'>
    


  /**
   * Reference to a field of type 'ImagePullPolicy[]'
   */
  export type ListEnumImagePullPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImagePullPolicy[]'>
    


  /**
   * Reference to a field of type 'ResourceKind'
   */
  export type EnumResourceKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceKind'>
    


  /**
   * Reference to a field of type 'ResourceKind[]'
   */
  export type ListEnumResourceKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceKind[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    services?: ServiceListRelationFilter
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    services?: ServiceListRelationFilter
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }, "id" | "name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    projectId?: IntFilter<"Service"> | number
    buildStrategy?: EnumBuildStrategyFilter<"Service"> | $Enums.BuildStrategy
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    repoUrl?: StringFilter<"Service"> | string
    businessFunction?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    buildStrategy?: SortOrder
    type?: SortOrder
    status?: SortOrder
    repoUrl?: SortOrder
    businessFunction?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    serviceEnvironments?: ServiceEnvironmentOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    projectId?: IntFilter<"Service"> | number
    buildStrategy?: EnumBuildStrategyFilter<"Service"> | $Enums.BuildStrategy
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    repoUrl?: StringFilter<"Service"> | string
    businessFunction?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    buildStrategy?: SortOrder
    type?: SortOrder
    status?: SortOrder
    repoUrl?: SortOrder
    businessFunction?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    projectId?: IntWithAggregatesFilter<"Service"> | number
    buildStrategy?: EnumBuildStrategyWithAggregatesFilter<"Service"> | $Enums.BuildStrategy
    type?: EnumServiceTypeWithAggregatesFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusWithAggregatesFilter<"Service"> | $Enums.ServiceStatus
    repoUrl?: StringWithAggregatesFilter<"Service"> | string
    businessFunction?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type EnvironmentMasterWhereInput = {
    AND?: EnvironmentMasterWhereInput | EnvironmentMasterWhereInput[]
    OR?: EnvironmentMasterWhereInput[]
    NOT?: EnvironmentMasterWhereInput | EnvironmentMasterWhereInput[]
    id?: IntFilter<"EnvironmentMaster"> | number
    name?: StringFilter<"EnvironmentMaster"> | string
    manualBuild?: BoolFilter<"EnvironmentMaster"> | boolean
    manualDeploy?: BoolFilter<"EnvironmentMaster"> | boolean
    createdAt?: DateTimeFilter<"EnvironmentMaster"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentMaster"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }

  export type EnvironmentMasterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
  }

  export type EnvironmentMasterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnvironmentMasterWhereInput | EnvironmentMasterWhereInput[]
    OR?: EnvironmentMasterWhereInput[]
    NOT?: EnvironmentMasterWhereInput | EnvironmentMasterWhereInput[]
    name?: StringFilter<"EnvironmentMaster"> | string
    manualBuild?: BoolFilter<"EnvironmentMaster"> | boolean
    manualDeploy?: BoolFilter<"EnvironmentMaster"> | boolean
    createdAt?: DateTimeFilter<"EnvironmentMaster"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentMaster"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }, "id">

  export type EnvironmentMasterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentMasterCountOrderByAggregateInput
    _avg?: EnvironmentMasterAvgOrderByAggregateInput
    _max?: EnvironmentMasterMaxOrderByAggregateInput
    _min?: EnvironmentMasterMinOrderByAggregateInput
    _sum?: EnvironmentMasterSumOrderByAggregateInput
  }

  export type EnvironmentMasterScalarWhereWithAggregatesInput = {
    AND?: EnvironmentMasterScalarWhereWithAggregatesInput | EnvironmentMasterScalarWhereWithAggregatesInput[]
    OR?: EnvironmentMasterScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentMasterScalarWhereWithAggregatesInput | EnvironmentMasterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EnvironmentMaster"> | number
    name?: StringWithAggregatesFilter<"EnvironmentMaster"> | string
    manualBuild?: BoolWithAggregatesFilter<"EnvironmentMaster"> | boolean
    manualDeploy?: BoolWithAggregatesFilter<"EnvironmentMaster"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentMaster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnvironmentMaster"> | Date | string
  }

  export type ProjectEnvironmentWhereInput = {
    AND?: ProjectEnvironmentWhereInput | ProjectEnvironmentWhereInput[]
    OR?: ProjectEnvironmentWhereInput[]
    NOT?: ProjectEnvironmentWhereInput | ProjectEnvironmentWhereInput[]
    id?: IntFilter<"ProjectEnvironment"> | number
    name?: StringFilter<"ProjectEnvironment"> | string
    projectId?: IntFilter<"ProjectEnvironment"> | number
    vaultAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    sonarAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    environmentMasterId?: IntFilter<"ProjectEnvironment"> | number
    manualBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ProjectEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    clusterId?: IntFilter<"ProjectEnvironment"> | number
    namespaceId?: IntFilter<"ProjectEnvironment"> | number
    createdAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    environmentMaster?: XOR<EnvironmentMasterRelationFilter, EnvironmentMasterWhereInput>
    cluster?: XOR<ClusterRelationFilter, ClusterWhereInput>
    namespace?: XOR<NamespaceRelationFilter, NamespaceWhereInput>
    registries?: RegistryListRelationFilter
    vmGroups?: VmGroupListRelationFilter
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
    builds?: BuildDetailsListRelationFilter
    deployments?: DeploymentListRelationFilter
  }

  export type ProjectEnvironmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    vaultAccessToken?: SortOrderInput | SortOrder
    sonarAccessToken?: SortOrderInput | SortOrder
    environmentMasterId?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    environmentMaster?: EnvironmentMasterOrderByWithRelationInput
    cluster?: ClusterOrderByWithRelationInput
    namespace?: NamespaceOrderByWithRelationInput
    registries?: RegistryOrderByRelationAggregateInput
    vmGroups?: VmGroupOrderByRelationAggregateInput
    serviceEnvironments?: ServiceEnvironmentOrderByRelationAggregateInput
    builds?: BuildDetailsOrderByRelationAggregateInput
    deployments?: DeploymentOrderByRelationAggregateInput
  }

  export type ProjectEnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectEnvironmentWhereInput | ProjectEnvironmentWhereInput[]
    OR?: ProjectEnvironmentWhereInput[]
    NOT?: ProjectEnvironmentWhereInput | ProjectEnvironmentWhereInput[]
    name?: StringFilter<"ProjectEnvironment"> | string
    projectId?: IntFilter<"ProjectEnvironment"> | number
    vaultAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    sonarAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    environmentMasterId?: IntFilter<"ProjectEnvironment"> | number
    manualBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ProjectEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    clusterId?: IntFilter<"ProjectEnvironment"> | number
    namespaceId?: IntFilter<"ProjectEnvironment"> | number
    createdAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    environmentMaster?: XOR<EnvironmentMasterRelationFilter, EnvironmentMasterWhereInput>
    cluster?: XOR<ClusterRelationFilter, ClusterWhereInput>
    namespace?: XOR<NamespaceRelationFilter, NamespaceWhereInput>
    registries?: RegistryListRelationFilter
    vmGroups?: VmGroupListRelationFilter
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
    builds?: BuildDetailsListRelationFilter
    deployments?: DeploymentListRelationFilter
  }, "id">

  export type ProjectEnvironmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    vaultAccessToken?: SortOrderInput | SortOrder
    sonarAccessToken?: SortOrderInput | SortOrder
    environmentMasterId?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectEnvironmentCountOrderByAggregateInput
    _avg?: ProjectEnvironmentAvgOrderByAggregateInput
    _max?: ProjectEnvironmentMaxOrderByAggregateInput
    _min?: ProjectEnvironmentMinOrderByAggregateInput
    _sum?: ProjectEnvironmentSumOrderByAggregateInput
  }

  export type ProjectEnvironmentScalarWhereWithAggregatesInput = {
    AND?: ProjectEnvironmentScalarWhereWithAggregatesInput | ProjectEnvironmentScalarWhereWithAggregatesInput[]
    OR?: ProjectEnvironmentScalarWhereWithAggregatesInput[]
    NOT?: ProjectEnvironmentScalarWhereWithAggregatesInput | ProjectEnvironmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectEnvironment"> | number
    name?: StringWithAggregatesFilter<"ProjectEnvironment"> | string
    projectId?: IntWithAggregatesFilter<"ProjectEnvironment"> | number
    vaultAccessToken?: StringNullableWithAggregatesFilter<"ProjectEnvironment"> | string | null
    sonarAccessToken?: StringNullableWithAggregatesFilter<"ProjectEnvironment"> | string | null
    environmentMasterId?: IntWithAggregatesFilter<"ProjectEnvironment"> | number
    manualBuild?: BoolWithAggregatesFilter<"ProjectEnvironment"> | boolean
    manualDeploy?: BoolWithAggregatesFilter<"ProjectEnvironment"> | boolean
    hyperBuild?: BoolWithAggregatesFilter<"ProjectEnvironment"> | boolean
    clusterId?: IntWithAggregatesFilter<"ProjectEnvironment"> | number
    namespaceId?: IntWithAggregatesFilter<"ProjectEnvironment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectEnvironment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectEnvironment"> | Date | string
  }

  export type ServiceEnvironmentWhereInput = {
    AND?: ServiceEnvironmentWhereInput | ServiceEnvironmentWhereInput[]
    OR?: ServiceEnvironmentWhereInput[]
    NOT?: ServiceEnvironmentWhereInput | ServiceEnvironmentWhereInput[]
    id?: IntFilter<"ServiceEnvironment"> | number
    serviceId?: IntFilter<"ServiceEnvironment"> | number
    projectEnvironmentId?: IntFilter<"ServiceEnvironment"> | number
    componentId?: IntFilter<"ServiceEnvironment"> | number
    imageName?: StringFilter<"ServiceEnvironment"> | string
    envRoleAccess?: StringNullableListFilter<"ServiceEnvironment">
    manualBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ServiceEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    registryId?: IntFilter<"ServiceEnvironment"> | number
    artifactName?: StringFilter<"ServiceEnvironment"> | string
    projectJobTemplateId?: IntFilter<"ServiceEnvironment"> | number
    templateVersion?: StringFilter<"ServiceEnvironment"> | string
    createdAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
    registry?: XOR<RegistryRelationFilter, RegistryWhereInput>
  }

  export type ServiceEnvironmentOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    imageName?: SortOrder
    envRoleAccess?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    registryId?: SortOrder
    artifactName?: SortOrder
    projectJobTemplateId?: SortOrder
    templateVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    projectEnvironment?: ProjectEnvironmentOrderByWithRelationInput
    registry?: RegistryOrderByWithRelationInput
  }

  export type ServiceEnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceEnvironmentWhereInput | ServiceEnvironmentWhereInput[]
    OR?: ServiceEnvironmentWhereInput[]
    NOT?: ServiceEnvironmentWhereInput | ServiceEnvironmentWhereInput[]
    serviceId?: IntFilter<"ServiceEnvironment"> | number
    projectEnvironmentId?: IntFilter<"ServiceEnvironment"> | number
    componentId?: IntFilter<"ServiceEnvironment"> | number
    imageName?: StringFilter<"ServiceEnvironment"> | string
    envRoleAccess?: StringNullableListFilter<"ServiceEnvironment">
    manualBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ServiceEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    registryId?: IntFilter<"ServiceEnvironment"> | number
    artifactName?: StringFilter<"ServiceEnvironment"> | string
    projectJobTemplateId?: IntFilter<"ServiceEnvironment"> | number
    templateVersion?: StringFilter<"ServiceEnvironment"> | string
    createdAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
    registry?: XOR<RegistryRelationFilter, RegistryWhereInput>
  }, "id">

  export type ServiceEnvironmentOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    imageName?: SortOrder
    envRoleAccess?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    registryId?: SortOrder
    artifactName?: SortOrder
    projectJobTemplateId?: SortOrder
    templateVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceEnvironmentCountOrderByAggregateInput
    _avg?: ServiceEnvironmentAvgOrderByAggregateInput
    _max?: ServiceEnvironmentMaxOrderByAggregateInput
    _min?: ServiceEnvironmentMinOrderByAggregateInput
    _sum?: ServiceEnvironmentSumOrderByAggregateInput
  }

  export type ServiceEnvironmentScalarWhereWithAggregatesInput = {
    AND?: ServiceEnvironmentScalarWhereWithAggregatesInput | ServiceEnvironmentScalarWhereWithAggregatesInput[]
    OR?: ServiceEnvironmentScalarWhereWithAggregatesInput[]
    NOT?: ServiceEnvironmentScalarWhereWithAggregatesInput | ServiceEnvironmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    serviceId?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    projectEnvironmentId?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    componentId?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    imageName?: StringWithAggregatesFilter<"ServiceEnvironment"> | string
    envRoleAccess?: StringNullableListFilter<"ServiceEnvironment">
    manualBuild?: BoolWithAggregatesFilter<"ServiceEnvironment"> | boolean
    manualDeploy?: BoolWithAggregatesFilter<"ServiceEnvironment"> | boolean
    hyperBuild?: BoolWithAggregatesFilter<"ServiceEnvironment"> | boolean
    registryId?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    artifactName?: StringWithAggregatesFilter<"ServiceEnvironment"> | string
    projectJobTemplateId?: IntWithAggregatesFilter<"ServiceEnvironment"> | number
    templateVersion?: StringWithAggregatesFilter<"ServiceEnvironment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceEnvironment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceEnvironment"> | Date | string
  }

  export type BuildDetailsWhereInput = {
    AND?: BuildDetailsWhereInput | BuildDetailsWhereInput[]
    OR?: BuildDetailsWhereInput[]
    NOT?: BuildDetailsWhereInput | BuildDetailsWhereInput[]
    id?: IntFilter<"BuildDetails"> | number
    gitRepoId?: IntFilter<"BuildDetails"> | number
    typeLabel?: StringNullableFilter<"BuildDetails"> | string | null
    dockerfilePath?: StringFilter<"BuildDetails"> | string
    depth?: IntFilter<"BuildDetails"> | number
    shallowCloning?: BoolFilter<"BuildDetails"> | boolean
    customParameters?: JsonNullableFilter<"BuildDetails">
    buildxPlatform?: StringNullableListFilter<"BuildDetails">
    branchName?: StringFilter<"BuildDetails"> | string
    projectJobTemplateId?: IntNullableFilter<"BuildDetails"> | number | null
    projectCiScopeId?: IntNullableFilter<"BuildDetails"> | number | null
    sonarProjectKey?: StringNullableFilter<"BuildDetails"> | string | null
    queueName?: StringNullableFilter<"BuildDetails"> | string | null
    projectEnvironmentId?: IntFilter<"BuildDetails"> | number
    envCiBuildVariable?: JsonFilter<"BuildDetails">
    envCiHook?: JsonFilter<"BuildDetails">
    createdAt?: DateTimeFilter<"BuildDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BuildDetails"> | Date | string
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
  }

  export type BuildDetailsOrderByWithRelationInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    typeLabel?: SortOrderInput | SortOrder
    dockerfilePath?: SortOrder
    depth?: SortOrder
    shallowCloning?: SortOrder
    customParameters?: SortOrderInput | SortOrder
    buildxPlatform?: SortOrder
    branchName?: SortOrder
    projectJobTemplateId?: SortOrderInput | SortOrder
    projectCiScopeId?: SortOrderInput | SortOrder
    sonarProjectKey?: SortOrderInput | SortOrder
    queueName?: SortOrderInput | SortOrder
    projectEnvironmentId?: SortOrder
    envCiBuildVariable?: SortOrder
    envCiHook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironment?: ProjectEnvironmentOrderByWithRelationInput
  }

  export type BuildDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BuildDetailsWhereInput | BuildDetailsWhereInput[]
    OR?: BuildDetailsWhereInput[]
    NOT?: BuildDetailsWhereInput | BuildDetailsWhereInput[]
    gitRepoId?: IntFilter<"BuildDetails"> | number
    typeLabel?: StringNullableFilter<"BuildDetails"> | string | null
    dockerfilePath?: StringFilter<"BuildDetails"> | string
    depth?: IntFilter<"BuildDetails"> | number
    shallowCloning?: BoolFilter<"BuildDetails"> | boolean
    customParameters?: JsonNullableFilter<"BuildDetails">
    buildxPlatform?: StringNullableListFilter<"BuildDetails">
    branchName?: StringFilter<"BuildDetails"> | string
    projectJobTemplateId?: IntNullableFilter<"BuildDetails"> | number | null
    projectCiScopeId?: IntNullableFilter<"BuildDetails"> | number | null
    sonarProjectKey?: StringNullableFilter<"BuildDetails"> | string | null
    queueName?: StringNullableFilter<"BuildDetails"> | string | null
    projectEnvironmentId?: IntFilter<"BuildDetails"> | number
    envCiBuildVariable?: JsonFilter<"BuildDetails">
    envCiHook?: JsonFilter<"BuildDetails">
    createdAt?: DateTimeFilter<"BuildDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BuildDetails"> | Date | string
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
  }, "id">

  export type BuildDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    typeLabel?: SortOrderInput | SortOrder
    dockerfilePath?: SortOrder
    depth?: SortOrder
    shallowCloning?: SortOrder
    customParameters?: SortOrderInput | SortOrder
    buildxPlatform?: SortOrder
    branchName?: SortOrder
    projectJobTemplateId?: SortOrderInput | SortOrder
    projectCiScopeId?: SortOrderInput | SortOrder
    sonarProjectKey?: SortOrderInput | SortOrder
    queueName?: SortOrderInput | SortOrder
    projectEnvironmentId?: SortOrder
    envCiBuildVariable?: SortOrder
    envCiHook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildDetailsCountOrderByAggregateInput
    _avg?: BuildDetailsAvgOrderByAggregateInput
    _max?: BuildDetailsMaxOrderByAggregateInput
    _min?: BuildDetailsMinOrderByAggregateInput
    _sum?: BuildDetailsSumOrderByAggregateInput
  }

  export type BuildDetailsScalarWhereWithAggregatesInput = {
    AND?: BuildDetailsScalarWhereWithAggregatesInput | BuildDetailsScalarWhereWithAggregatesInput[]
    OR?: BuildDetailsScalarWhereWithAggregatesInput[]
    NOT?: BuildDetailsScalarWhereWithAggregatesInput | BuildDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BuildDetails"> | number
    gitRepoId?: IntWithAggregatesFilter<"BuildDetails"> | number
    typeLabel?: StringNullableWithAggregatesFilter<"BuildDetails"> | string | null
    dockerfilePath?: StringWithAggregatesFilter<"BuildDetails"> | string
    depth?: IntWithAggregatesFilter<"BuildDetails"> | number
    shallowCloning?: BoolWithAggregatesFilter<"BuildDetails"> | boolean
    customParameters?: JsonNullableWithAggregatesFilter<"BuildDetails">
    buildxPlatform?: StringNullableListFilter<"BuildDetails">
    branchName?: StringWithAggregatesFilter<"BuildDetails"> | string
    projectJobTemplateId?: IntNullableWithAggregatesFilter<"BuildDetails"> | number | null
    projectCiScopeId?: IntNullableWithAggregatesFilter<"BuildDetails"> | number | null
    sonarProjectKey?: StringNullableWithAggregatesFilter<"BuildDetails"> | string | null
    queueName?: StringNullableWithAggregatesFilter<"BuildDetails"> | string | null
    projectEnvironmentId?: IntWithAggregatesFilter<"BuildDetails"> | number
    envCiBuildVariable?: JsonWithAggregatesFilter<"BuildDetails">
    envCiHook?: JsonWithAggregatesFilter<"BuildDetails">
    createdAt?: DateTimeWithAggregatesFilter<"BuildDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BuildDetails"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: IntFilter<"Deployment"> | number
    serviceName?: StringFilter<"Deployment"> | string
    deploymentName?: StringFilter<"Deployment"> | string
    deployVariableRawInput?: BoolFilter<"Deployment"> | boolean
    deploymentRollbackValidation?: BoolFilter<"Deployment"> | boolean
    deploymentNames?: StringNullableListFilter<"Deployment">
    preHookEnabled?: BoolFilter<"Deployment"> | boolean
    postHookEnabled?: BoolFilter<"Deployment"> | boolean
    imagePullPolicy?: EnumImagePullPolicyFilter<"Deployment"> | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFilter<"Deployment"> | $Enums.ResourceKind
    envCdHook?: JsonFilter<"Deployment">
    queueName?: StringNullableFilter<"Deployment"> | string | null
    manifestMetaData?: JsonFilter<"Deployment">
    envCdDeploymentStrategy?: JsonFilter<"Deployment">
    envCdDeployVariable?: JsonFilter<"Deployment">
    projectEnvironmentId?: IntFilter<"Deployment"> | number
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    deploymentName?: SortOrder
    deployVariableRawInput?: SortOrder
    deploymentRollbackValidation?: SortOrder
    deploymentNames?: SortOrder
    preHookEnabled?: SortOrder
    postHookEnabled?: SortOrder
    imagePullPolicy?: SortOrder
    resourceKind?: SortOrder
    envCdHook?: SortOrder
    queueName?: SortOrderInput | SortOrder
    manifestMetaData?: SortOrder
    envCdDeploymentStrategy?: SortOrder
    envCdDeployVariable?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironment?: ProjectEnvironmentOrderByWithRelationInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    serviceName?: StringFilter<"Deployment"> | string
    deploymentName?: StringFilter<"Deployment"> | string
    deployVariableRawInput?: BoolFilter<"Deployment"> | boolean
    deploymentRollbackValidation?: BoolFilter<"Deployment"> | boolean
    deploymentNames?: StringNullableListFilter<"Deployment">
    preHookEnabled?: BoolFilter<"Deployment"> | boolean
    postHookEnabled?: BoolFilter<"Deployment"> | boolean
    imagePullPolicy?: EnumImagePullPolicyFilter<"Deployment"> | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFilter<"Deployment"> | $Enums.ResourceKind
    envCdHook?: JsonFilter<"Deployment">
    queueName?: StringNullableFilter<"Deployment"> | string | null
    manifestMetaData?: JsonFilter<"Deployment">
    envCdDeploymentStrategy?: JsonFilter<"Deployment">
    envCdDeployVariable?: JsonFilter<"Deployment">
    projectEnvironmentId?: IntFilter<"Deployment"> | number
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    projectEnvironment?: XOR<ProjectEnvironmentRelationFilter, ProjectEnvironmentWhereInput>
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    deploymentName?: SortOrder
    deployVariableRawInput?: SortOrder
    deploymentRollbackValidation?: SortOrder
    deploymentNames?: SortOrder
    preHookEnabled?: SortOrder
    postHookEnabled?: SortOrder
    imagePullPolicy?: SortOrder
    resourceKind?: SortOrder
    envCdHook?: SortOrder
    queueName?: SortOrderInput | SortOrder
    manifestMetaData?: SortOrder
    envCdDeploymentStrategy?: SortOrder
    envCdDeployVariable?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _avg?: DeploymentAvgOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
    _sum?: DeploymentSumOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deployment"> | number
    serviceName?: StringWithAggregatesFilter<"Deployment"> | string
    deploymentName?: StringWithAggregatesFilter<"Deployment"> | string
    deployVariableRawInput?: BoolWithAggregatesFilter<"Deployment"> | boolean
    deploymentRollbackValidation?: BoolWithAggregatesFilter<"Deployment"> | boolean
    deploymentNames?: StringNullableListFilter<"Deployment">
    preHookEnabled?: BoolWithAggregatesFilter<"Deployment"> | boolean
    postHookEnabled?: BoolWithAggregatesFilter<"Deployment"> | boolean
    imagePullPolicy?: EnumImagePullPolicyWithAggregatesFilter<"Deployment"> | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindWithAggregatesFilter<"Deployment"> | $Enums.ResourceKind
    envCdHook?: JsonWithAggregatesFilter<"Deployment">
    queueName?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    manifestMetaData?: JsonWithAggregatesFilter<"Deployment">
    envCdDeploymentStrategy?: JsonWithAggregatesFilter<"Deployment">
    envCdDeployVariable?: JsonWithAggregatesFilter<"Deployment">
    projectEnvironmentId?: IntWithAggregatesFilter<"Deployment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
  }

  export type ClusterWhereInput = {
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    id?: IntFilter<"Cluster"> | number
    name?: StringFilter<"Cluster"> | string
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }

  export type ClusterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
  }

  export type ClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    name?: StringFilter<"Cluster"> | string
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }, "id">

  export type ClusterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClusterCountOrderByAggregateInput
    _avg?: ClusterAvgOrderByAggregateInput
    _max?: ClusterMaxOrderByAggregateInput
    _min?: ClusterMinOrderByAggregateInput
    _sum?: ClusterSumOrderByAggregateInput
  }

  export type ClusterScalarWhereWithAggregatesInput = {
    AND?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    OR?: ClusterScalarWhereWithAggregatesInput[]
    NOT?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cluster"> | number
    name?: StringWithAggregatesFilter<"Cluster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
  }

  export type NamespaceWhereInput = {
    AND?: NamespaceWhereInput | NamespaceWhereInput[]
    OR?: NamespaceWhereInput[]
    NOT?: NamespaceWhereInput | NamespaceWhereInput[]
    id?: IntFilter<"Namespace"> | number
    name?: StringFilter<"Namespace"> | string
    createdAt?: DateTimeFilter<"Namespace"> | Date | string
    updatedAt?: DateTimeFilter<"Namespace"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }

  export type NamespaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
  }

  export type NamespaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NamespaceWhereInput | NamespaceWhereInput[]
    OR?: NamespaceWhereInput[]
    NOT?: NamespaceWhereInput | NamespaceWhereInput[]
    name?: StringFilter<"Namespace"> | string
    createdAt?: DateTimeFilter<"Namespace"> | Date | string
    updatedAt?: DateTimeFilter<"Namespace"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }, "id">

  export type NamespaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NamespaceCountOrderByAggregateInput
    _avg?: NamespaceAvgOrderByAggregateInput
    _max?: NamespaceMaxOrderByAggregateInput
    _min?: NamespaceMinOrderByAggregateInput
    _sum?: NamespaceSumOrderByAggregateInput
  }

  export type NamespaceScalarWhereWithAggregatesInput = {
    AND?: NamespaceScalarWhereWithAggregatesInput | NamespaceScalarWhereWithAggregatesInput[]
    OR?: NamespaceScalarWhereWithAggregatesInput[]
    NOT?: NamespaceScalarWhereWithAggregatesInput | NamespaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Namespace"> | number
    name?: StringWithAggregatesFilter<"Namespace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Namespace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Namespace"> | Date | string
  }

  export type RegistryWhereInput = {
    AND?: RegistryWhereInput | RegistryWhereInput[]
    OR?: RegistryWhereInput[]
    NOT?: RegistryWhereInput | RegistryWhereInput[]
    id?: IntFilter<"Registry"> | number
    name?: StringFilter<"Registry"> | string
    createdAt?: DateTimeFilter<"Registry"> | Date | string
    updatedAt?: DateTimeFilter<"Registry"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
  }

  export type RegistryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
    serviceEnvironments?: ServiceEnvironmentOrderByRelationAggregateInput
  }

  export type RegistryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistryWhereInput | RegistryWhereInput[]
    OR?: RegistryWhereInput[]
    NOT?: RegistryWhereInput | RegistryWhereInput[]
    name?: StringFilter<"Registry"> | string
    createdAt?: DateTimeFilter<"Registry"> | Date | string
    updatedAt?: DateTimeFilter<"Registry"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
    serviceEnvironments?: ServiceEnvironmentListRelationFilter
  }, "id">

  export type RegistryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistryCountOrderByAggregateInput
    _avg?: RegistryAvgOrderByAggregateInput
    _max?: RegistryMaxOrderByAggregateInput
    _min?: RegistryMinOrderByAggregateInput
    _sum?: RegistrySumOrderByAggregateInput
  }

  export type RegistryScalarWhereWithAggregatesInput = {
    AND?: RegistryScalarWhereWithAggregatesInput | RegistryScalarWhereWithAggregatesInput[]
    OR?: RegistryScalarWhereWithAggregatesInput[]
    NOT?: RegistryScalarWhereWithAggregatesInput | RegistryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registry"> | number
    name?: StringWithAggregatesFilter<"Registry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Registry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Registry"> | Date | string
  }

  export type VmGroupWhereInput = {
    AND?: VmGroupWhereInput | VmGroupWhereInput[]
    OR?: VmGroupWhereInput[]
    NOT?: VmGroupWhereInput | VmGroupWhereInput[]
    id?: IntFilter<"VmGroup"> | number
    name?: StringFilter<"VmGroup"> | string
    createdAt?: DateTimeFilter<"VmGroup"> | Date | string
    updatedAt?: DateTimeFilter<"VmGroup"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }

  export type VmGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectEnvironments?: ProjectEnvironmentOrderByRelationAggregateInput
  }

  export type VmGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VmGroupWhereInput | VmGroupWhereInput[]
    OR?: VmGroupWhereInput[]
    NOT?: VmGroupWhereInput | VmGroupWhereInput[]
    name?: StringFilter<"VmGroup"> | string
    createdAt?: DateTimeFilter<"VmGroup"> | Date | string
    updatedAt?: DateTimeFilter<"VmGroup"> | Date | string
    projectEnvironments?: ProjectEnvironmentListRelationFilter
  }, "id">

  export type VmGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VmGroupCountOrderByAggregateInput
    _avg?: VmGroupAvgOrderByAggregateInput
    _max?: VmGroupMaxOrderByAggregateInput
    _min?: VmGroupMinOrderByAggregateInput
    _sum?: VmGroupSumOrderByAggregateInput
  }

  export type VmGroupScalarWhereWithAggregatesInput = {
    AND?: VmGroupScalarWhereWithAggregatesInput | VmGroupScalarWhereWithAggregatesInput[]
    OR?: VmGroupScalarWhereWithAggregatesInput[]
    NOT?: VmGroupScalarWhereWithAggregatesInput | VmGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VmGroup"> | number
    name?: StringWithAggregatesFilter<"VmGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VmGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VmGroup"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutProjectInput
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProjectInput
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutProjectNestedInput
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    projectId: number
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentMasterCreateInput = {
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutEnvironmentMasterInput
  }

  export type EnvironmentMasterUncheckedCreateInput = {
    id?: number
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutEnvironmentMasterInput
  }

  export type EnvironmentMasterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutEnvironmentMasterNestedInput
  }

  export type EnvironmentMasterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutEnvironmentMasterNestedInput
  }

  export type EnvironmentMasterCreateManyInput = {
    id?: number
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentMasterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentMasterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentCreateInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentCreateManyInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentCreateInput = {
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutServiceEnvironmentsInput
    projectEnvironment: ProjectEnvironmentCreateNestedOneWithoutServiceEnvironmentsInput
    registry: RegistryCreateNestedOneWithoutServiceEnvironmentsInput
  }

  export type ServiceEnvironmentUncheckedCreateInput = {
    id?: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentUpdateInput = {
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
    projectEnvironment?: ProjectEnvironmentUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
    registry?: RegistryUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
  }

  export type ServiceEnvironmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentCreateManyInput = {
    id?: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentUpdateManyMutationInput = {
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsCreateInput = {
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironment: ProjectEnvironmentCreateNestedOneWithoutBuildsInput
  }

  export type BuildDetailsUncheckedCreateInput = {
    id?: number
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    projectEnvironmentId: number
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildDetailsUpdateInput = {
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironment?: ProjectEnvironmentUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type BuildDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsCreateManyInput = {
    id?: number
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    projectEnvironmentId: number
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildDetailsUpdateManyMutationInput = {
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironment: ProjectEnvironmentCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: number
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    projectEnvironmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateInput = {
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironment?: ProjectEnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyInput = {
    id?: number
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    projectEnvironmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateManyMutationInput = {
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamespaceCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutNamespaceInput
  }

  export type NamespaceUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutNamespaceInput
  }

  export type NamespaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutNamespaceNestedInput
  }

  export type NamespaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutNamespaceNestedInput
  }

  export type NamespaceCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NamespaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamespaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutRegistriesInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutRegistryInput
  }

  export type RegistryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutRegistriesInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutRegistryInput
  }

  export type RegistryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutRegistriesNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutRegistryNestedInput
  }

  export type RegistryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutRegistriesNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutRegistryNestedInput
  }

  export type RegistryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VmGroupCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutVmGroupsInput
  }

  export type VmGroupUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutVmGroupsInput
  }

  export type VmGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutVmGroupsNestedInput
  }

  export type VmGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutVmGroupsNestedInput
  }

  export type VmGroupCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VmGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VmGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ProjectEnvironmentListRelationFilter = {
    every?: ProjectEnvironmentWhereInput
    some?: ProjectEnvironmentWhereInput
    none?: ProjectEnvironmentWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectEnvironmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumBuildStrategyFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStrategy | EnumBuildStrategyFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStrategyFilter<$PrismaModel> | $Enums.BuildStrategy
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ServiceEnvironmentListRelationFilter = {
    every?: ServiceEnvironmentWhereInput
    some?: ServiceEnvironmentWhereInput
    none?: ServiceEnvironmentWhereInput
  }

  export type ServiceEnvironmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    buildStrategy?: SortOrder
    type?: SortOrder
    status?: SortOrder
    repoUrl?: SortOrder
    businessFunction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    buildStrategy?: SortOrder
    type?: SortOrder
    status?: SortOrder
    repoUrl?: SortOrder
    businessFunction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    buildStrategy?: SortOrder
    type?: SortOrder
    status?: SortOrder
    repoUrl?: SortOrder
    businessFunction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type EnumBuildStrategyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStrategy | EnumBuildStrategyFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStrategyWithAggregatesFilter<$PrismaModel> | $Enums.BuildStrategy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStrategyFilter<$PrismaModel>
    _max?: NestedEnumBuildStrategyFilter<$PrismaModel>
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnvironmentMasterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMasterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnvironmentMasterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMasterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMasterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnvironmentMasterRelationFilter = {
    is?: EnvironmentMasterWhereInput
    isNot?: EnvironmentMasterWhereInput
  }

  export type ClusterRelationFilter = {
    is?: ClusterWhereInput
    isNot?: ClusterWhereInput
  }

  export type NamespaceRelationFilter = {
    is?: NamespaceWhereInput
    isNot?: NamespaceWhereInput
  }

  export type RegistryListRelationFilter = {
    every?: RegistryWhereInput
    some?: RegistryWhereInput
    none?: RegistryWhereInput
  }

  export type VmGroupListRelationFilter = {
    every?: VmGroupWhereInput
    some?: VmGroupWhereInput
    none?: VmGroupWhereInput
  }

  export type BuildDetailsListRelationFilter = {
    every?: BuildDetailsWhereInput
    some?: BuildDetailsWhereInput
    none?: BuildDetailsWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type RegistryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VmGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectEnvironmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    vaultAccessToken?: SortOrder
    sonarAccessToken?: SortOrder
    environmentMasterId?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEnvironmentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    environmentMasterId?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
  }

  export type ProjectEnvironmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    vaultAccessToken?: SortOrder
    sonarAccessToken?: SortOrder
    environmentMasterId?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEnvironmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    vaultAccessToken?: SortOrder
    sonarAccessToken?: SortOrder
    environmentMasterId?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEnvironmentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    environmentMasterId?: SortOrder
    clusterId?: SortOrder
    namespaceId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ProjectEnvironmentRelationFilter = {
    is?: ProjectEnvironmentWhereInput
    isNot?: ProjectEnvironmentWhereInput
  }

  export type RegistryRelationFilter = {
    is?: RegistryWhereInput
    isNot?: RegistryWhereInput
  }

  export type ServiceEnvironmentCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    imageName?: SortOrder
    envRoleAccess?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    registryId?: SortOrder
    artifactName?: SortOrder
    projectJobTemplateId?: SortOrder
    templateVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceEnvironmentAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    registryId?: SortOrder
    projectJobTemplateId?: SortOrder
  }

  export type ServiceEnvironmentMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    imageName?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    registryId?: SortOrder
    artifactName?: SortOrder
    projectJobTemplateId?: SortOrder
    templateVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceEnvironmentMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    imageName?: SortOrder
    manualBuild?: SortOrder
    manualDeploy?: SortOrder
    hyperBuild?: SortOrder
    registryId?: SortOrder
    artifactName?: SortOrder
    projectJobTemplateId?: SortOrder
    templateVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceEnvironmentSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    projectEnvironmentId?: SortOrder
    componentId?: SortOrder
    registryId?: SortOrder
    projectJobTemplateId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BuildDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    typeLabel?: SortOrder
    dockerfilePath?: SortOrder
    depth?: SortOrder
    shallowCloning?: SortOrder
    customParameters?: SortOrder
    buildxPlatform?: SortOrder
    branchName?: SortOrder
    projectJobTemplateId?: SortOrder
    projectCiScopeId?: SortOrder
    sonarProjectKey?: SortOrder
    queueName?: SortOrder
    projectEnvironmentId?: SortOrder
    envCiBuildVariable?: SortOrder
    envCiHook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    depth?: SortOrder
    projectJobTemplateId?: SortOrder
    projectCiScopeId?: SortOrder
    projectEnvironmentId?: SortOrder
  }

  export type BuildDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    typeLabel?: SortOrder
    dockerfilePath?: SortOrder
    depth?: SortOrder
    shallowCloning?: SortOrder
    branchName?: SortOrder
    projectJobTemplateId?: SortOrder
    projectCiScopeId?: SortOrder
    sonarProjectKey?: SortOrder
    queueName?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    typeLabel?: SortOrder
    dockerfilePath?: SortOrder
    depth?: SortOrder
    shallowCloning?: SortOrder
    branchName?: SortOrder
    projectJobTemplateId?: SortOrder
    projectCiScopeId?: SortOrder
    sonarProjectKey?: SortOrder
    queueName?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    gitRepoId?: SortOrder
    depth?: SortOrder
    projectJobTemplateId?: SortOrder
    projectCiScopeId?: SortOrder
    projectEnvironmentId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumImagePullPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.ImagePullPolicy | EnumImagePullPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumImagePullPolicyFilter<$PrismaModel> | $Enums.ImagePullPolicy
  }

  export type EnumResourceKindFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceKind | EnumResourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceKindFilter<$PrismaModel> | $Enums.ResourceKind
  }

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    deploymentName?: SortOrder
    deployVariableRawInput?: SortOrder
    deploymentRollbackValidation?: SortOrder
    deploymentNames?: SortOrder
    preHookEnabled?: SortOrder
    postHookEnabled?: SortOrder
    imagePullPolicy?: SortOrder
    resourceKind?: SortOrder
    envCdHook?: SortOrder
    queueName?: SortOrder
    manifestMetaData?: SortOrder
    envCdDeploymentStrategy?: SortOrder
    envCdDeployVariable?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectEnvironmentId?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    deploymentName?: SortOrder
    deployVariableRawInput?: SortOrder
    deploymentRollbackValidation?: SortOrder
    preHookEnabled?: SortOrder
    postHookEnabled?: SortOrder
    imagePullPolicy?: SortOrder
    resourceKind?: SortOrder
    queueName?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    deploymentName?: SortOrder
    deployVariableRawInput?: SortOrder
    deploymentRollbackValidation?: SortOrder
    preHookEnabled?: SortOrder
    postHookEnabled?: SortOrder
    imagePullPolicy?: SortOrder
    resourceKind?: SortOrder
    queueName?: SortOrder
    projectEnvironmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentSumOrderByAggregateInput = {
    id?: SortOrder
    projectEnvironmentId?: SortOrder
  }

  export type EnumImagePullPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImagePullPolicy | EnumImagePullPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumImagePullPolicyWithAggregatesFilter<$PrismaModel> | $Enums.ImagePullPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImagePullPolicyFilter<$PrismaModel>
    _max?: NestedEnumImagePullPolicyFilter<$PrismaModel>
  }

  export type EnumResourceKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceKind | EnumResourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceKindWithAggregatesFilter<$PrismaModel> | $Enums.ResourceKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceKindFilter<$PrismaModel>
    _max?: NestedEnumResourceKindFilter<$PrismaModel>
  }

  export type ClusterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NamespaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NamespaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NamespaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NamespaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NamespaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegistryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegistryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VmGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VmGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VmGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VmGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VmGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceCreateNestedManyWithoutProjectInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ProjectEnvironmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput> | ProjectEnvironmentCreateWithoutProjectInput[] | ProjectEnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutProjectInput | ProjectEnvironmentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEnvironmentCreateManyProjectInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput> | ProjectEnvironmentCreateWithoutProjectInput[] | ProjectEnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutProjectInput | ProjectEnvironmentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEnvironmentCreateManyProjectInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProjectInput | ServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProjectInput | ServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProjectInput | ServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProjectEnvironmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput> | ProjectEnvironmentCreateWithoutProjectInput[] | ProjectEnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutProjectInput | ProjectEnvironmentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutProjectInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEnvironmentCreateManyProjectInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutProjectInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutProjectInput | ProjectEnvironmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProjectInput | ServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProjectInput | ServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProjectInput | ServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput> | ProjectEnvironmentCreateWithoutProjectInput[] | ProjectEnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutProjectInput | ProjectEnvironmentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutProjectInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEnvironmentCreateManyProjectInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutProjectInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutProjectInput | ProjectEnvironmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutServicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ServiceEnvironmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput> | ServiceEnvironmentCreateWithoutServiceInput[] | ServiceEnvironmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutServiceInput | ServiceEnvironmentCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceEnvironmentCreateManyServiceInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type ServiceEnvironmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput> | ServiceEnvironmentCreateWithoutServiceInput[] | ServiceEnvironmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutServiceInput | ServiceEnvironmentCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceEnvironmentCreateManyServiceInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type EnumBuildStrategyFieldUpdateOperationsInput = {
    set?: $Enums.BuildStrategy
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type ProjectUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutServicesInput
    upsert?: ProjectUpsertWithoutServicesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutServicesInput, ProjectUpdateWithoutServicesInput>, ProjectUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceEnvironmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput> | ServiceEnvironmentCreateWithoutServiceInput[] | ServiceEnvironmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutServiceInput | ServiceEnvironmentCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutServiceInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceEnvironmentCreateManyServiceInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutServiceInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutServiceInput | ServiceEnvironmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput> | ServiceEnvironmentCreateWithoutServiceInput[] | ServiceEnvironmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutServiceInput | ServiceEnvironmentCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutServiceInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceEnvironmentCreateManyServiceInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutServiceInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutServiceInput | ServiceEnvironmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentCreateNestedManyWithoutEnvironmentMasterInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput> | ProjectEnvironmentCreateWithoutEnvironmentMasterInput[] | ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput | ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput[]
    createMany?: ProjectEnvironmentCreateManyEnvironmentMasterInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutEnvironmentMasterInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput> | ProjectEnvironmentCreateWithoutEnvironmentMasterInput[] | ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput | ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput[]
    createMany?: ProjectEnvironmentCreateManyEnvironmentMasterInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectEnvironmentUpdateManyWithoutEnvironmentMasterNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput> | ProjectEnvironmentCreateWithoutEnvironmentMasterInput[] | ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput | ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutEnvironmentMasterInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutEnvironmentMasterInput[]
    createMany?: ProjectEnvironmentCreateManyEnvironmentMasterInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutEnvironmentMasterInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutEnvironmentMasterInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutEnvironmentMasterInput | ProjectEnvironmentUpdateManyWithWhereWithoutEnvironmentMasterInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutEnvironmentMasterNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput> | ProjectEnvironmentCreateWithoutEnvironmentMasterInput[] | ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput | ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutEnvironmentMasterInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutEnvironmentMasterInput[]
    createMany?: ProjectEnvironmentCreateManyEnvironmentMasterInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutEnvironmentMasterInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutEnvironmentMasterInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutEnvironmentMasterInput | ProjectEnvironmentUpdateManyWithWhereWithoutEnvironmentMasterInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectEnvironmentsInput = {
    create?: XOR<ProjectCreateWithoutProjectEnvironmentsInput, ProjectUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectEnvironmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput = {
    create?: XOR<EnvironmentMasterCreateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: EnvironmentMasterCreateOrConnectWithoutProjectEnvironmentsInput
    connect?: EnvironmentMasterWhereUniqueInput
  }

  export type ClusterCreateNestedOneWithoutProjectEnvironmentsInput = {
    create?: XOR<ClusterCreateWithoutProjectEnvironmentsInput, ClusterUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutProjectEnvironmentsInput
    connect?: ClusterWhereUniqueInput
  }

  export type NamespaceCreateNestedOneWithoutProjectEnvironmentsInput = {
    create?: XOR<NamespaceCreateWithoutProjectEnvironmentsInput, NamespaceUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: NamespaceCreateOrConnectWithoutProjectEnvironmentsInput
    connect?: NamespaceWhereUniqueInput
  }

  export type RegistryCreateNestedManyWithoutProjectEnvironmentsInput = {
    create?: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput> | RegistryCreateWithoutProjectEnvironmentsInput[] | RegistryUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: RegistryCreateOrConnectWithoutProjectEnvironmentsInput | RegistryCreateOrConnectWithoutProjectEnvironmentsInput[]
    connect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
  }

  export type VmGroupCreateNestedManyWithoutProjectEnvironmentsInput = {
    create?: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput> | VmGroupCreateWithoutProjectEnvironmentsInput[] | VmGroupUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: VmGroupCreateOrConnectWithoutProjectEnvironmentsInput | VmGroupCreateOrConnectWithoutProjectEnvironmentsInput[]
    connect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
  }

  export type ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput> | ServiceEnvironmentCreateWithoutProjectEnvironmentInput[] | ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput | ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: ServiceEnvironmentCreateManyProjectEnvironmentInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput> | BuildDetailsCreateWithoutProjectEnvironmentInput[] | BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput | BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: BuildDetailsCreateManyProjectEnvironmentInputEnvelope
    connect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
  }

  export type DeploymentCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput> | DeploymentCreateWithoutProjectEnvironmentInput[] | DeploymentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectEnvironmentInput | DeploymentCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: DeploymentCreateManyProjectEnvironmentInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput = {
    create?: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput> | RegistryCreateWithoutProjectEnvironmentsInput[] | RegistryUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: RegistryCreateOrConnectWithoutProjectEnvironmentsInput | RegistryCreateOrConnectWithoutProjectEnvironmentsInput[]
    connect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
  }

  export type VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput = {
    create?: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput> | VmGroupCreateWithoutProjectEnvironmentsInput[] | VmGroupUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: VmGroupCreateOrConnectWithoutProjectEnvironmentsInput | VmGroupCreateOrConnectWithoutProjectEnvironmentsInput[]
    connect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
  }

  export type ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput> | ServiceEnvironmentCreateWithoutProjectEnvironmentInput[] | ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput | ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: ServiceEnvironmentCreateManyProjectEnvironmentInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput> | BuildDetailsCreateWithoutProjectEnvironmentInput[] | BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput | BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: BuildDetailsCreateManyProjectEnvironmentInputEnvelope
    connect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput = {
    create?: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput> | DeploymentCreateWithoutProjectEnvironmentInput[] | DeploymentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectEnvironmentInput | DeploymentCreateOrConnectWithoutProjectEnvironmentInput[]
    createMany?: DeploymentCreateManyProjectEnvironmentInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectEnvironmentsInput, ProjectUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectEnvironmentsInput
    upsert?: ProjectUpsertWithoutProjectEnvironmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectEnvironmentsInput, ProjectUpdateWithoutProjectEnvironmentsInput>, ProjectUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<EnvironmentMasterCreateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: EnvironmentMasterCreateOrConnectWithoutProjectEnvironmentsInput
    upsert?: EnvironmentMasterUpsertWithoutProjectEnvironmentsInput
    connect?: EnvironmentMasterWhereUniqueInput
    update?: XOR<XOR<EnvironmentMasterUpdateToOneWithWhereWithoutProjectEnvironmentsInput, EnvironmentMasterUpdateWithoutProjectEnvironmentsInput>, EnvironmentMasterUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<ClusterCreateWithoutProjectEnvironmentsInput, ClusterUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutProjectEnvironmentsInput
    upsert?: ClusterUpsertWithoutProjectEnvironmentsInput
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutProjectEnvironmentsInput, ClusterUpdateWithoutProjectEnvironmentsInput>, ClusterUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<NamespaceCreateWithoutProjectEnvironmentsInput, NamespaceUncheckedCreateWithoutProjectEnvironmentsInput>
    connectOrCreate?: NamespaceCreateOrConnectWithoutProjectEnvironmentsInput
    upsert?: NamespaceUpsertWithoutProjectEnvironmentsInput
    connect?: NamespaceWhereUniqueInput
    update?: XOR<XOR<NamespaceUpdateToOneWithWhereWithoutProjectEnvironmentsInput, NamespaceUpdateWithoutProjectEnvironmentsInput>, NamespaceUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type RegistryUpdateManyWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput> | RegistryCreateWithoutProjectEnvironmentsInput[] | RegistryUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: RegistryCreateOrConnectWithoutProjectEnvironmentsInput | RegistryCreateOrConnectWithoutProjectEnvironmentsInput[]
    upsert?: RegistryUpsertWithWhereUniqueWithoutProjectEnvironmentsInput | RegistryUpsertWithWhereUniqueWithoutProjectEnvironmentsInput[]
    set?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    disconnect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    delete?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    connect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    update?: RegistryUpdateWithWhereUniqueWithoutProjectEnvironmentsInput | RegistryUpdateWithWhereUniqueWithoutProjectEnvironmentsInput[]
    updateMany?: RegistryUpdateManyWithWhereWithoutProjectEnvironmentsInput | RegistryUpdateManyWithWhereWithoutProjectEnvironmentsInput[]
    deleteMany?: RegistryScalarWhereInput | RegistryScalarWhereInput[]
  }

  export type VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput> | VmGroupCreateWithoutProjectEnvironmentsInput[] | VmGroupUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: VmGroupCreateOrConnectWithoutProjectEnvironmentsInput | VmGroupCreateOrConnectWithoutProjectEnvironmentsInput[]
    upsert?: VmGroupUpsertWithWhereUniqueWithoutProjectEnvironmentsInput | VmGroupUpsertWithWhereUniqueWithoutProjectEnvironmentsInput[]
    set?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    disconnect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    delete?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    connect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    update?: VmGroupUpdateWithWhereUniqueWithoutProjectEnvironmentsInput | VmGroupUpdateWithWhereUniqueWithoutProjectEnvironmentsInput[]
    updateMany?: VmGroupUpdateManyWithWhereWithoutProjectEnvironmentsInput | VmGroupUpdateManyWithWhereWithoutProjectEnvironmentsInput[]
    deleteMany?: VmGroupScalarWhereInput | VmGroupScalarWhereInput[]
  }

  export type ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput> | ServiceEnvironmentCreateWithoutProjectEnvironmentInput[] | ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput | ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutProjectEnvironmentInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: ServiceEnvironmentCreateManyProjectEnvironmentInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutProjectEnvironmentInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutProjectEnvironmentInput | ServiceEnvironmentUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput> | BuildDetailsCreateWithoutProjectEnvironmentInput[] | BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput | BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: BuildDetailsUpsertWithWhereUniqueWithoutProjectEnvironmentInput | BuildDetailsUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: BuildDetailsCreateManyProjectEnvironmentInputEnvelope
    set?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    disconnect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    delete?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    connect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    update?: BuildDetailsUpdateWithWhereUniqueWithoutProjectEnvironmentInput | BuildDetailsUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: BuildDetailsUpdateManyWithWhereWithoutProjectEnvironmentInput | BuildDetailsUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: BuildDetailsScalarWhereInput | BuildDetailsScalarWhereInput[]
  }

  export type DeploymentUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput> | DeploymentCreateWithoutProjectEnvironmentInput[] | DeploymentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectEnvironmentInput | DeploymentCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectEnvironmentInput | DeploymentUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: DeploymentCreateManyProjectEnvironmentInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectEnvironmentInput | DeploymentUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectEnvironmentInput | DeploymentUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput> | RegistryCreateWithoutProjectEnvironmentsInput[] | RegistryUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: RegistryCreateOrConnectWithoutProjectEnvironmentsInput | RegistryCreateOrConnectWithoutProjectEnvironmentsInput[]
    upsert?: RegistryUpsertWithWhereUniqueWithoutProjectEnvironmentsInput | RegistryUpsertWithWhereUniqueWithoutProjectEnvironmentsInput[]
    set?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    disconnect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    delete?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    connect?: RegistryWhereUniqueInput | RegistryWhereUniqueInput[]
    update?: RegistryUpdateWithWhereUniqueWithoutProjectEnvironmentsInput | RegistryUpdateWithWhereUniqueWithoutProjectEnvironmentsInput[]
    updateMany?: RegistryUpdateManyWithWhereWithoutProjectEnvironmentsInput | RegistryUpdateManyWithWhereWithoutProjectEnvironmentsInput[]
    deleteMany?: RegistryScalarWhereInput | RegistryScalarWhereInput[]
  }

  export type VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput = {
    create?: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput> | VmGroupCreateWithoutProjectEnvironmentsInput[] | VmGroupUncheckedCreateWithoutProjectEnvironmentsInput[]
    connectOrCreate?: VmGroupCreateOrConnectWithoutProjectEnvironmentsInput | VmGroupCreateOrConnectWithoutProjectEnvironmentsInput[]
    upsert?: VmGroupUpsertWithWhereUniqueWithoutProjectEnvironmentsInput | VmGroupUpsertWithWhereUniqueWithoutProjectEnvironmentsInput[]
    set?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    disconnect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    delete?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    connect?: VmGroupWhereUniqueInput | VmGroupWhereUniqueInput[]
    update?: VmGroupUpdateWithWhereUniqueWithoutProjectEnvironmentsInput | VmGroupUpdateWithWhereUniqueWithoutProjectEnvironmentsInput[]
    updateMany?: VmGroupUpdateManyWithWhereWithoutProjectEnvironmentsInput | VmGroupUpdateManyWithWhereWithoutProjectEnvironmentsInput[]
    deleteMany?: VmGroupScalarWhereInput | VmGroupScalarWhereInput[]
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput> | ServiceEnvironmentCreateWithoutProjectEnvironmentInput[] | ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput | ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutProjectEnvironmentInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: ServiceEnvironmentCreateManyProjectEnvironmentInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutProjectEnvironmentInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutProjectEnvironmentInput | ServiceEnvironmentUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput> | BuildDetailsCreateWithoutProjectEnvironmentInput[] | BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput | BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: BuildDetailsUpsertWithWhereUniqueWithoutProjectEnvironmentInput | BuildDetailsUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: BuildDetailsCreateManyProjectEnvironmentInputEnvelope
    set?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    disconnect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    delete?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    connect?: BuildDetailsWhereUniqueInput | BuildDetailsWhereUniqueInput[]
    update?: BuildDetailsUpdateWithWhereUniqueWithoutProjectEnvironmentInput | BuildDetailsUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: BuildDetailsUpdateManyWithWhereWithoutProjectEnvironmentInput | BuildDetailsUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: BuildDetailsScalarWhereInput | BuildDetailsScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput> | DeploymentCreateWithoutProjectEnvironmentInput[] | DeploymentUncheckedCreateWithoutProjectEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectEnvironmentInput | DeploymentCreateOrConnectWithoutProjectEnvironmentInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectEnvironmentInput | DeploymentUpsertWithWhereUniqueWithoutProjectEnvironmentInput[]
    createMany?: DeploymentCreateManyProjectEnvironmentInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectEnvironmentInput | DeploymentUpdateWithWhereUniqueWithoutProjectEnvironmentInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectEnvironmentInput | DeploymentUpdateManyWithWhereWithoutProjectEnvironmentInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ServiceEnvironmentCreateenvRoleAccessInput = {
    set: string[]
  }

  export type ServiceCreateNestedOneWithoutServiceEnvironmentsInput = {
    create?: XOR<ServiceCreateWithoutServiceEnvironmentsInput, ServiceUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceEnvironmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ProjectEnvironmentCreateNestedOneWithoutServiceEnvironmentsInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutServiceEnvironmentsInput
    connect?: ProjectEnvironmentWhereUniqueInput
  }

  export type RegistryCreateNestedOneWithoutServiceEnvironmentsInput = {
    create?: XOR<RegistryCreateWithoutServiceEnvironmentsInput, RegistryUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: RegistryCreateOrConnectWithoutServiceEnvironmentsInput
    connect?: RegistryWhereUniqueInput
  }

  export type ServiceEnvironmentUpdateenvRoleAccessInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceUpdateOneRequiredWithoutServiceEnvironmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceEnvironmentsInput, ServiceUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceEnvironmentsInput
    upsert?: ServiceUpsertWithoutServiceEnvironmentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceEnvironmentsInput, ServiceUpdateWithoutServiceEnvironmentsInput>, ServiceUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type ProjectEnvironmentUpdateOneRequiredWithoutServiceEnvironmentsNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutServiceEnvironmentsInput
    upsert?: ProjectEnvironmentUpsertWithoutServiceEnvironmentsInput
    connect?: ProjectEnvironmentWhereUniqueInput
    update?: XOR<XOR<ProjectEnvironmentUpdateToOneWithWhereWithoutServiceEnvironmentsInput, ProjectEnvironmentUpdateWithoutServiceEnvironmentsInput>, ProjectEnvironmentUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type RegistryUpdateOneRequiredWithoutServiceEnvironmentsNestedInput = {
    create?: XOR<RegistryCreateWithoutServiceEnvironmentsInput, RegistryUncheckedCreateWithoutServiceEnvironmentsInput>
    connectOrCreate?: RegistryCreateOrConnectWithoutServiceEnvironmentsInput
    upsert?: RegistryUpsertWithoutServiceEnvironmentsInput
    connect?: RegistryWhereUniqueInput
    update?: XOR<XOR<RegistryUpdateToOneWithWhereWithoutServiceEnvironmentsInput, RegistryUpdateWithoutServiceEnvironmentsInput>, RegistryUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type BuildDetailsCreatebuildxPlatformInput = {
    set: string[]
  }

  export type ProjectEnvironmentCreateNestedOneWithoutBuildsInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutBuildsInput, ProjectEnvironmentUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutBuildsInput
    connect?: ProjectEnvironmentWhereUniqueInput
  }

  export type BuildDetailsUpdatebuildxPlatformInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectEnvironmentUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutBuildsInput, ProjectEnvironmentUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutBuildsInput
    upsert?: ProjectEnvironmentUpsertWithoutBuildsInput
    connect?: ProjectEnvironmentWhereUniqueInput
    update?: XOR<XOR<ProjectEnvironmentUpdateToOneWithWhereWithoutBuildsInput, ProjectEnvironmentUpdateWithoutBuildsInput>, ProjectEnvironmentUncheckedUpdateWithoutBuildsInput>
  }

  export type DeploymentCreatedeploymentNamesInput = {
    set: string[]
  }

  export type ProjectEnvironmentCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutDeploymentsInput, ProjectEnvironmentUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutDeploymentsInput
    connect?: ProjectEnvironmentWhereUniqueInput
  }

  export type DeploymentUpdatedeploymentNamesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumImagePullPolicyFieldUpdateOperationsInput = {
    set?: $Enums.ImagePullPolicy
  }

  export type EnumResourceKindFieldUpdateOperationsInput = {
    set?: $Enums.ResourceKind
  }

  export type ProjectEnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutDeploymentsInput, ProjectEnvironmentUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutDeploymentsInput
    upsert?: ProjectEnvironmentUpsertWithoutDeploymentsInput
    connect?: ProjectEnvironmentWhereUniqueInput
    update?: XOR<XOR<ProjectEnvironmentUpdateToOneWithWhereWithoutDeploymentsInput, ProjectEnvironmentUpdateWithoutDeploymentsInput>, ProjectEnvironmentUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ProjectEnvironmentCreateNestedManyWithoutClusterInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput> | ProjectEnvironmentCreateWithoutClusterInput[] | ProjectEnvironmentUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutClusterInput | ProjectEnvironmentCreateOrConnectWithoutClusterInput[]
    createMany?: ProjectEnvironmentCreateManyClusterInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput> | ProjectEnvironmentCreateWithoutClusterInput[] | ProjectEnvironmentUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutClusterInput | ProjectEnvironmentCreateOrConnectWithoutClusterInput[]
    createMany?: ProjectEnvironmentCreateManyClusterInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput> | ProjectEnvironmentCreateWithoutClusterInput[] | ProjectEnvironmentUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutClusterInput | ProjectEnvironmentCreateOrConnectWithoutClusterInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutClusterInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ProjectEnvironmentCreateManyClusterInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutClusterInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutClusterInput | ProjectEnvironmentUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput> | ProjectEnvironmentCreateWithoutClusterInput[] | ProjectEnvironmentUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutClusterInput | ProjectEnvironmentCreateOrConnectWithoutClusterInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutClusterInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ProjectEnvironmentCreateManyClusterInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutClusterInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutClusterInput | ProjectEnvironmentUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentCreateNestedManyWithoutNamespaceInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput> | ProjectEnvironmentCreateWithoutNamespaceInput[] | ProjectEnvironmentUncheckedCreateWithoutNamespaceInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutNamespaceInput | ProjectEnvironmentCreateOrConnectWithoutNamespaceInput[]
    createMany?: ProjectEnvironmentCreateManyNamespaceInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutNamespaceInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput> | ProjectEnvironmentCreateWithoutNamespaceInput[] | ProjectEnvironmentUncheckedCreateWithoutNamespaceInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutNamespaceInput | ProjectEnvironmentCreateOrConnectWithoutNamespaceInput[]
    createMany?: ProjectEnvironmentCreateManyNamespaceInputEnvelope
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUpdateManyWithoutNamespaceNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput> | ProjectEnvironmentCreateWithoutNamespaceInput[] | ProjectEnvironmentUncheckedCreateWithoutNamespaceInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutNamespaceInput | ProjectEnvironmentCreateOrConnectWithoutNamespaceInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutNamespaceInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutNamespaceInput[]
    createMany?: ProjectEnvironmentCreateManyNamespaceInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutNamespaceInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutNamespaceInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutNamespaceInput | ProjectEnvironmentUpdateManyWithWhereWithoutNamespaceInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutNamespaceNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput> | ProjectEnvironmentCreateWithoutNamespaceInput[] | ProjectEnvironmentUncheckedCreateWithoutNamespaceInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutNamespaceInput | ProjectEnvironmentCreateOrConnectWithoutNamespaceInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutNamespaceInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutNamespaceInput[]
    createMany?: ProjectEnvironmentCreateManyNamespaceInputEnvelope
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutNamespaceInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutNamespaceInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutNamespaceInput | ProjectEnvironmentUpdateManyWithWhereWithoutNamespaceInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentCreateNestedManyWithoutRegistriesInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput> | ProjectEnvironmentCreateWithoutRegistriesInput[] | ProjectEnvironmentUncheckedCreateWithoutRegistriesInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutRegistriesInput | ProjectEnvironmentCreateOrConnectWithoutRegistriesInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ServiceEnvironmentCreateNestedManyWithoutRegistryInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput> | ServiceEnvironmentCreateWithoutRegistryInput[] | ServiceEnvironmentUncheckedCreateWithoutRegistryInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutRegistryInput | ServiceEnvironmentCreateOrConnectWithoutRegistryInput[]
    createMany?: ServiceEnvironmentCreateManyRegistryInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutRegistriesInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput> | ProjectEnvironmentCreateWithoutRegistriesInput[] | ProjectEnvironmentUncheckedCreateWithoutRegistriesInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutRegistriesInput | ProjectEnvironmentCreateOrConnectWithoutRegistriesInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ServiceEnvironmentUncheckedCreateNestedManyWithoutRegistryInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput> | ServiceEnvironmentCreateWithoutRegistryInput[] | ServiceEnvironmentUncheckedCreateWithoutRegistryInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutRegistryInput | ServiceEnvironmentCreateOrConnectWithoutRegistryInput[]
    createMany?: ServiceEnvironmentCreateManyRegistryInputEnvelope
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUpdateManyWithoutRegistriesNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput> | ProjectEnvironmentCreateWithoutRegistriesInput[] | ProjectEnvironmentUncheckedCreateWithoutRegistriesInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutRegistriesInput | ProjectEnvironmentCreateOrConnectWithoutRegistriesInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutRegistriesInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutRegistriesInput[]
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutRegistriesInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutRegistriesInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutRegistriesInput | ProjectEnvironmentUpdateManyWithWhereWithoutRegistriesInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ServiceEnvironmentUpdateManyWithoutRegistryNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput> | ServiceEnvironmentCreateWithoutRegistryInput[] | ServiceEnvironmentUncheckedCreateWithoutRegistryInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutRegistryInput | ServiceEnvironmentCreateOrConnectWithoutRegistryInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutRegistryInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutRegistryInput[]
    createMany?: ServiceEnvironmentCreateManyRegistryInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutRegistryInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutRegistryInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutRegistryInput | ServiceEnvironmentUpdateManyWithWhereWithoutRegistryInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutRegistriesNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput> | ProjectEnvironmentCreateWithoutRegistriesInput[] | ProjectEnvironmentUncheckedCreateWithoutRegistriesInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutRegistriesInput | ProjectEnvironmentCreateOrConnectWithoutRegistriesInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutRegistriesInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutRegistriesInput[]
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutRegistriesInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutRegistriesInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutRegistriesInput | ProjectEnvironmentUpdateManyWithWhereWithoutRegistriesInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutRegistryNestedInput = {
    create?: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput> | ServiceEnvironmentCreateWithoutRegistryInput[] | ServiceEnvironmentUncheckedCreateWithoutRegistryInput[]
    connectOrCreate?: ServiceEnvironmentCreateOrConnectWithoutRegistryInput | ServiceEnvironmentCreateOrConnectWithoutRegistryInput[]
    upsert?: ServiceEnvironmentUpsertWithWhereUniqueWithoutRegistryInput | ServiceEnvironmentUpsertWithWhereUniqueWithoutRegistryInput[]
    createMany?: ServiceEnvironmentCreateManyRegistryInputEnvelope
    set?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    disconnect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    delete?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    connect?: ServiceEnvironmentWhereUniqueInput | ServiceEnvironmentWhereUniqueInput[]
    update?: ServiceEnvironmentUpdateWithWhereUniqueWithoutRegistryInput | ServiceEnvironmentUpdateWithWhereUniqueWithoutRegistryInput[]
    updateMany?: ServiceEnvironmentUpdateManyWithWhereWithoutRegistryInput | ServiceEnvironmentUpdateManyWithWhereWithoutRegistryInput[]
    deleteMany?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentCreateNestedManyWithoutVmGroupsInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput> | ProjectEnvironmentCreateWithoutVmGroupsInput[] | ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput | ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUncheckedCreateNestedManyWithoutVmGroupsInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput> | ProjectEnvironmentCreateWithoutVmGroupsInput[] | ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput | ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
  }

  export type ProjectEnvironmentUpdateManyWithoutVmGroupsNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput> | ProjectEnvironmentCreateWithoutVmGroupsInput[] | ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput | ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutVmGroupsInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutVmGroupsInput[]
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutVmGroupsInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutVmGroupsInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutVmGroupsInput | ProjectEnvironmentUpdateManyWithWhereWithoutVmGroupsInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutVmGroupsNestedInput = {
    create?: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput> | ProjectEnvironmentCreateWithoutVmGroupsInput[] | ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput[]
    connectOrCreate?: ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput | ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput[]
    upsert?: ProjectEnvironmentUpsertWithWhereUniqueWithoutVmGroupsInput | ProjectEnvironmentUpsertWithWhereUniqueWithoutVmGroupsInput[]
    set?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    disconnect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    delete?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    connect?: ProjectEnvironmentWhereUniqueInput | ProjectEnvironmentWhereUniqueInput[]
    update?: ProjectEnvironmentUpdateWithWhereUniqueWithoutVmGroupsInput | ProjectEnvironmentUpdateWithWhereUniqueWithoutVmGroupsInput[]
    updateMany?: ProjectEnvironmentUpdateManyWithWhereWithoutVmGroupsInput | ProjectEnvironmentUpdateManyWithWhereWithoutVmGroupsInput[]
    deleteMany?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBuildStrategyFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStrategy | EnumBuildStrategyFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStrategyFilter<$PrismaModel> | $Enums.BuildStrategy
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type NestedEnumBuildStrategyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStrategy | EnumBuildStrategyFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStrategy[] | ListEnumBuildStrategyFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStrategyWithAggregatesFilter<$PrismaModel> | $Enums.BuildStrategy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStrategyFilter<$PrismaModel>
    _max?: NestedEnumBuildStrategyFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumImagePullPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.ImagePullPolicy | EnumImagePullPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumImagePullPolicyFilter<$PrismaModel> | $Enums.ImagePullPolicy
  }

  export type NestedEnumResourceKindFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceKind | EnumResourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceKindFilter<$PrismaModel> | $Enums.ResourceKind
  }

  export type NestedEnumImagePullPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImagePullPolicy | EnumImagePullPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImagePullPolicy[] | ListEnumImagePullPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumImagePullPolicyWithAggregatesFilter<$PrismaModel> | $Enums.ImagePullPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImagePullPolicyFilter<$PrismaModel>
    _max?: NestedEnumImagePullPolicyFilter<$PrismaModel>
  }

  export type NestedEnumResourceKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceKind | EnumResourceKindFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceKind[] | ListEnumResourceKindFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceKindWithAggregatesFilter<$PrismaModel> | $Enums.ResourceKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceKindFilter<$PrismaModel>
    _max?: NestedEnumResourceKindFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutProjectInput = {
    name: string
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProjectInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput>
  }

  export type ServiceCreateManyProjectInputEnvelope = {
    data: ServiceCreateManyProjectInput | ServiceCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEnvironmentCreateWithoutProjectInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutProjectInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEnvironmentCreateManyProjectInputEnvelope = {
    data: ProjectEnvironmentCreateManyProjectInput | ProjectEnvironmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutProjectInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutProjectInput, ServiceUncheckedUpdateWithoutProjectInput>
    create: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutProjectInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutProjectInput, ServiceUncheckedUpdateWithoutProjectInput>
  }

  export type ServiceUpdateManyWithWhereWithoutProjectInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutProjectInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    projectId?: IntFilter<"Service"> | number
    buildStrategy?: EnumBuildStrategyFilter<"Service"> | $Enums.BuildStrategy
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    repoUrl?: StringFilter<"Service"> | string
    businessFunction?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutProjectInput, ProjectEnvironmentUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectEnvironmentCreateWithoutProjectInput, ProjectEnvironmentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutProjectInput, ProjectEnvironmentUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectEnvironmentScalarWhereInput = {
    AND?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
    OR?: ProjectEnvironmentScalarWhereInput[]
    NOT?: ProjectEnvironmentScalarWhereInput | ProjectEnvironmentScalarWhereInput[]
    id?: IntFilter<"ProjectEnvironment"> | number
    name?: StringFilter<"ProjectEnvironment"> | string
    projectId?: IntFilter<"ProjectEnvironment"> | number
    vaultAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    sonarAccessToken?: StringNullableFilter<"ProjectEnvironment"> | string | null
    environmentMasterId?: IntFilter<"ProjectEnvironment"> | number
    manualBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ProjectEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ProjectEnvironment"> | boolean
    clusterId?: IntFilter<"ProjectEnvironment"> | number
    namespaceId?: IntFilter<"ProjectEnvironment"> | number
    createdAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEnvironment"> | Date | string
  }

  export type ProjectCreateWithoutServicesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutServicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
  }

  export type ServiceEnvironmentCreateWithoutServiceInput = {
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironment: ProjectEnvironmentCreateNestedOneWithoutServiceEnvironmentsInput
    registry: RegistryCreateNestedOneWithoutServiceEnvironmentsInput
  }

  export type ServiceEnvironmentUncheckedCreateWithoutServiceInput = {
    id?: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentCreateOrConnectWithoutServiceInput = {
    where: ServiceEnvironmentWhereUniqueInput
    create: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceEnvironmentCreateManyServiceInputEnvelope = {
    data: ServiceEnvironmentCreateManyServiceInput | ServiceEnvironmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutServicesInput = {
    update: XOR<ProjectUpdateWithoutServicesInput, ProjectUncheckedUpdateWithoutServicesInput>
    create: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutServicesInput, ProjectUncheckedUpdateWithoutServicesInput>
  }

  export type ProjectUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ServiceEnvironmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceEnvironmentWhereUniqueInput
    update: XOR<ServiceEnvironmentUpdateWithoutServiceInput, ServiceEnvironmentUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceEnvironmentCreateWithoutServiceInput, ServiceEnvironmentUncheckedCreateWithoutServiceInput>
  }

  export type ServiceEnvironmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceEnvironmentWhereUniqueInput
    data: XOR<ServiceEnvironmentUpdateWithoutServiceInput, ServiceEnvironmentUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceEnvironmentUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceEnvironmentScalarWhereInput
    data: XOR<ServiceEnvironmentUpdateManyMutationInput, ServiceEnvironmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceEnvironmentScalarWhereInput = {
    AND?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
    OR?: ServiceEnvironmentScalarWhereInput[]
    NOT?: ServiceEnvironmentScalarWhereInput | ServiceEnvironmentScalarWhereInput[]
    id?: IntFilter<"ServiceEnvironment"> | number
    serviceId?: IntFilter<"ServiceEnvironment"> | number
    projectEnvironmentId?: IntFilter<"ServiceEnvironment"> | number
    componentId?: IntFilter<"ServiceEnvironment"> | number
    imageName?: StringFilter<"ServiceEnvironment"> | string
    envRoleAccess?: StringNullableListFilter<"ServiceEnvironment">
    manualBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    manualDeploy?: BoolFilter<"ServiceEnvironment"> | boolean
    hyperBuild?: BoolFilter<"ServiceEnvironment"> | boolean
    registryId?: IntFilter<"ServiceEnvironment"> | number
    artifactName?: StringFilter<"ServiceEnvironment"> | string
    projectJobTemplateId?: IntFilter<"ServiceEnvironment"> | number
    templateVersion?: StringFilter<"ServiceEnvironment"> | string
    createdAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceEnvironment"> | Date | string
  }

  export type ProjectEnvironmentCreateWithoutEnvironmentMasterInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutEnvironmentMasterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput>
  }

  export type ProjectEnvironmentCreateManyEnvironmentMasterInputEnvelope = {
    data: ProjectEnvironmentCreateManyEnvironmentMasterInput | ProjectEnvironmentCreateManyEnvironmentMasterInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutEnvironmentMasterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedUpdateWithoutEnvironmentMasterInput>
    create: XOR<ProjectEnvironmentCreateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedCreateWithoutEnvironmentMasterInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutEnvironmentMasterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutEnvironmentMasterInput, ProjectEnvironmentUncheckedUpdateWithoutEnvironmentMasterInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutEnvironmentMasterInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutEnvironmentMasterInput>
  }

  export type ProjectCreateWithoutProjectEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectEnvironmentsInput, ProjectUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type EnvironmentMasterCreateWithoutProjectEnvironmentsInput = {
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentMasterUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    manualBuild: boolean
    manualDeploy: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentMasterCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: EnvironmentMasterWhereUniqueInput
    create: XOR<EnvironmentMasterCreateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type ClusterCreateWithoutProjectEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutProjectEnvironmentsInput, ClusterUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type NamespaceCreateWithoutProjectEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NamespaceUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NamespaceCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: NamespaceWhereUniqueInput
    create: XOR<NamespaceCreateWithoutProjectEnvironmentsInput, NamespaceUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type RegistryCreateWithoutProjectEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutRegistryInput
  }

  export type RegistryUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutRegistryInput
  }

  export type RegistryCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: RegistryWhereUniqueInput
    create: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type VmGroupCreateWithoutProjectEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VmGroupUncheckedCreateWithoutProjectEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VmGroupCreateOrConnectWithoutProjectEnvironmentsInput = {
    where: VmGroupWhereUniqueInput
    create: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type ServiceEnvironmentCreateWithoutProjectEnvironmentInput = {
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutServiceEnvironmentsInput
    registry: RegistryCreateNestedOneWithoutServiceEnvironmentsInput
  }

  export type ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput = {
    id?: number
    serviceId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentCreateOrConnectWithoutProjectEnvironmentInput = {
    where: ServiceEnvironmentWhereUniqueInput
    create: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type ServiceEnvironmentCreateManyProjectEnvironmentInputEnvelope = {
    data: ServiceEnvironmentCreateManyProjectEnvironmentInput | ServiceEnvironmentCreateManyProjectEnvironmentInput[]
    skipDuplicates?: boolean
  }

  export type BuildDetailsCreateWithoutProjectEnvironmentInput = {
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput = {
    id?: number
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildDetailsCreateOrConnectWithoutProjectEnvironmentInput = {
    where: BuildDetailsWhereUniqueInput
    create: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type BuildDetailsCreateManyProjectEnvironmentInputEnvelope = {
    data: BuildDetailsCreateManyProjectEnvironmentInput | BuildDetailsCreateManyProjectEnvironmentInput[]
    skipDuplicates?: boolean
  }

  export type DeploymentCreateWithoutProjectEnvironmentInput = {
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUncheckedCreateWithoutProjectEnvironmentInput = {
    id?: number
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateOrConnectWithoutProjectEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type DeploymentCreateManyProjectEnvironmentInputEnvelope = {
    data: DeploymentCreateManyProjectEnvironmentInput | DeploymentCreateManyProjectEnvironmentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutProjectEnvironmentsInput = {
    update: XOR<ProjectUpdateWithoutProjectEnvironmentsInput, ProjectUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<ProjectCreateWithoutProjectEnvironmentsInput, ProjectUncheckedCreateWithoutProjectEnvironmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectEnvironmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectEnvironmentsInput, ProjectUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type ProjectUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type EnvironmentMasterUpsertWithoutProjectEnvironmentsInput = {
    update: XOR<EnvironmentMasterUpdateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<EnvironmentMasterCreateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedCreateWithoutProjectEnvironmentsInput>
    where?: EnvironmentMasterWhereInput
  }

  export type EnvironmentMasterUpdateToOneWithWhereWithoutProjectEnvironmentsInput = {
    where?: EnvironmentMasterWhereInput
    data: XOR<EnvironmentMasterUpdateWithoutProjectEnvironmentsInput, EnvironmentMasterUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type EnvironmentMasterUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentMasterUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUpsertWithoutProjectEnvironmentsInput = {
    update: XOR<ClusterUpdateWithoutProjectEnvironmentsInput, ClusterUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<ClusterCreateWithoutProjectEnvironmentsInput, ClusterUncheckedCreateWithoutProjectEnvironmentsInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutProjectEnvironmentsInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutProjectEnvironmentsInput, ClusterUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type ClusterUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamespaceUpsertWithoutProjectEnvironmentsInput = {
    update: XOR<NamespaceUpdateWithoutProjectEnvironmentsInput, NamespaceUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<NamespaceCreateWithoutProjectEnvironmentsInput, NamespaceUncheckedCreateWithoutProjectEnvironmentsInput>
    where?: NamespaceWhereInput
  }

  export type NamespaceUpdateToOneWithWhereWithoutProjectEnvironmentsInput = {
    where?: NamespaceWhereInput
    data: XOR<NamespaceUpdateWithoutProjectEnvironmentsInput, NamespaceUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type NamespaceUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamespaceUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistryUpsertWithWhereUniqueWithoutProjectEnvironmentsInput = {
    where: RegistryWhereUniqueInput
    update: XOR<RegistryUpdateWithoutProjectEnvironmentsInput, RegistryUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<RegistryCreateWithoutProjectEnvironmentsInput, RegistryUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type RegistryUpdateWithWhereUniqueWithoutProjectEnvironmentsInput = {
    where: RegistryWhereUniqueInput
    data: XOR<RegistryUpdateWithoutProjectEnvironmentsInput, RegistryUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type RegistryUpdateManyWithWhereWithoutProjectEnvironmentsInput = {
    where: RegistryScalarWhereInput
    data: XOR<RegistryUpdateManyMutationInput, RegistryUncheckedUpdateManyWithoutProjectEnvironmentsInput>
  }

  export type RegistryScalarWhereInput = {
    AND?: RegistryScalarWhereInput | RegistryScalarWhereInput[]
    OR?: RegistryScalarWhereInput[]
    NOT?: RegistryScalarWhereInput | RegistryScalarWhereInput[]
    id?: IntFilter<"Registry"> | number
    name?: StringFilter<"Registry"> | string
    createdAt?: DateTimeFilter<"Registry"> | Date | string
    updatedAt?: DateTimeFilter<"Registry"> | Date | string
  }

  export type VmGroupUpsertWithWhereUniqueWithoutProjectEnvironmentsInput = {
    where: VmGroupWhereUniqueInput
    update: XOR<VmGroupUpdateWithoutProjectEnvironmentsInput, VmGroupUncheckedUpdateWithoutProjectEnvironmentsInput>
    create: XOR<VmGroupCreateWithoutProjectEnvironmentsInput, VmGroupUncheckedCreateWithoutProjectEnvironmentsInput>
  }

  export type VmGroupUpdateWithWhereUniqueWithoutProjectEnvironmentsInput = {
    where: VmGroupWhereUniqueInput
    data: XOR<VmGroupUpdateWithoutProjectEnvironmentsInput, VmGroupUncheckedUpdateWithoutProjectEnvironmentsInput>
  }

  export type VmGroupUpdateManyWithWhereWithoutProjectEnvironmentsInput = {
    where: VmGroupScalarWhereInput
    data: XOR<VmGroupUpdateManyMutationInput, VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsInput>
  }

  export type VmGroupScalarWhereInput = {
    AND?: VmGroupScalarWhereInput | VmGroupScalarWhereInput[]
    OR?: VmGroupScalarWhereInput[]
    NOT?: VmGroupScalarWhereInput | VmGroupScalarWhereInput[]
    id?: IntFilter<"VmGroup"> | number
    name?: StringFilter<"VmGroup"> | string
    createdAt?: DateTimeFilter<"VmGroup"> | Date | string
    updatedAt?: DateTimeFilter<"VmGroup"> | Date | string
  }

  export type ServiceEnvironmentUpsertWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: ServiceEnvironmentWhereUniqueInput
    update: XOR<ServiceEnvironmentUpdateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedUpdateWithoutProjectEnvironmentInput>
    create: XOR<ServiceEnvironmentCreateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type ServiceEnvironmentUpdateWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: ServiceEnvironmentWhereUniqueInput
    data: XOR<ServiceEnvironmentUpdateWithoutProjectEnvironmentInput, ServiceEnvironmentUncheckedUpdateWithoutProjectEnvironmentInput>
  }

  export type ServiceEnvironmentUpdateManyWithWhereWithoutProjectEnvironmentInput = {
    where: ServiceEnvironmentScalarWhereInput
    data: XOR<ServiceEnvironmentUpdateManyMutationInput, ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentInput>
  }

  export type BuildDetailsUpsertWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: BuildDetailsWhereUniqueInput
    update: XOR<BuildDetailsUpdateWithoutProjectEnvironmentInput, BuildDetailsUncheckedUpdateWithoutProjectEnvironmentInput>
    create: XOR<BuildDetailsCreateWithoutProjectEnvironmentInput, BuildDetailsUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type BuildDetailsUpdateWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: BuildDetailsWhereUniqueInput
    data: XOR<BuildDetailsUpdateWithoutProjectEnvironmentInput, BuildDetailsUncheckedUpdateWithoutProjectEnvironmentInput>
  }

  export type BuildDetailsUpdateManyWithWhereWithoutProjectEnvironmentInput = {
    where: BuildDetailsScalarWhereInput
    data: XOR<BuildDetailsUpdateManyMutationInput, BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentInput>
  }

  export type BuildDetailsScalarWhereInput = {
    AND?: BuildDetailsScalarWhereInput | BuildDetailsScalarWhereInput[]
    OR?: BuildDetailsScalarWhereInput[]
    NOT?: BuildDetailsScalarWhereInput | BuildDetailsScalarWhereInput[]
    id?: IntFilter<"BuildDetails"> | number
    gitRepoId?: IntFilter<"BuildDetails"> | number
    typeLabel?: StringNullableFilter<"BuildDetails"> | string | null
    dockerfilePath?: StringFilter<"BuildDetails"> | string
    depth?: IntFilter<"BuildDetails"> | number
    shallowCloning?: BoolFilter<"BuildDetails"> | boolean
    customParameters?: JsonNullableFilter<"BuildDetails">
    buildxPlatform?: StringNullableListFilter<"BuildDetails">
    branchName?: StringFilter<"BuildDetails"> | string
    projectJobTemplateId?: IntNullableFilter<"BuildDetails"> | number | null
    projectCiScopeId?: IntNullableFilter<"BuildDetails"> | number | null
    sonarProjectKey?: StringNullableFilter<"BuildDetails"> | string | null
    queueName?: StringNullableFilter<"BuildDetails"> | string | null
    projectEnvironmentId?: IntFilter<"BuildDetails"> | number
    envCiBuildVariable?: JsonFilter<"BuildDetails">
    envCiHook?: JsonFilter<"BuildDetails">
    createdAt?: DateTimeFilter<"BuildDetails"> | Date | string
    updatedAt?: DateTimeFilter<"BuildDetails"> | Date | string
  }

  export type DeploymentUpsertWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutProjectEnvironmentInput, DeploymentUncheckedUpdateWithoutProjectEnvironmentInput>
    create: XOR<DeploymentCreateWithoutProjectEnvironmentInput, DeploymentUncheckedCreateWithoutProjectEnvironmentInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutProjectEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutProjectEnvironmentInput, DeploymentUncheckedUpdateWithoutProjectEnvironmentInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutProjectEnvironmentInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutProjectEnvironmentInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: IntFilter<"Deployment"> | number
    serviceName?: StringFilter<"Deployment"> | string
    deploymentName?: StringFilter<"Deployment"> | string
    deployVariableRawInput?: BoolFilter<"Deployment"> | boolean
    deploymentRollbackValidation?: BoolFilter<"Deployment"> | boolean
    deploymentNames?: StringNullableListFilter<"Deployment">
    preHookEnabled?: BoolFilter<"Deployment"> | boolean
    postHookEnabled?: BoolFilter<"Deployment"> | boolean
    imagePullPolicy?: EnumImagePullPolicyFilter<"Deployment"> | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFilter<"Deployment"> | $Enums.ResourceKind
    envCdHook?: JsonFilter<"Deployment">
    queueName?: StringNullableFilter<"Deployment"> | string | null
    manifestMetaData?: JsonFilter<"Deployment">
    envCdDeploymentStrategy?: JsonFilter<"Deployment">
    envCdDeployVariable?: JsonFilter<"Deployment">
    projectEnvironmentId?: IntFilter<"Deployment"> | number
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
  }

  export type ServiceCreateWithoutServiceEnvironmentsInput = {
    name: string
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutServiceEnvironmentsInput = {
    id?: number
    name: string
    projectId: number
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutServiceEnvironmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceEnvironmentsInput, ServiceUncheckedCreateWithoutServiceEnvironmentsInput>
  }

  export type ProjectEnvironmentCreateWithoutServiceEnvironmentsInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutServiceEnvironmentsInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutServiceEnvironmentsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedCreateWithoutServiceEnvironmentsInput>
  }

  export type RegistryCreateWithoutServiceEnvironmentsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentCreateNestedManyWithoutRegistriesInput
  }

  export type RegistryUncheckedCreateWithoutServiceEnvironmentsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedCreateNestedManyWithoutRegistriesInput
  }

  export type RegistryCreateOrConnectWithoutServiceEnvironmentsInput = {
    where: RegistryWhereUniqueInput
    create: XOR<RegistryCreateWithoutServiceEnvironmentsInput, RegistryUncheckedCreateWithoutServiceEnvironmentsInput>
  }

  export type ServiceUpsertWithoutServiceEnvironmentsInput = {
    update: XOR<ServiceUpdateWithoutServiceEnvironmentsInput, ServiceUncheckedUpdateWithoutServiceEnvironmentsInput>
    create: XOR<ServiceCreateWithoutServiceEnvironmentsInput, ServiceUncheckedCreateWithoutServiceEnvironmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceEnvironmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceEnvironmentsInput, ServiceUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type ServiceUpdateWithoutServiceEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentUpsertWithoutServiceEnvironmentsInput = {
    update: XOR<ProjectEnvironmentUpdateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedUpdateWithoutServiceEnvironmentsInput>
    create: XOR<ProjectEnvironmentCreateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedCreateWithoutServiceEnvironmentsInput>
    where?: ProjectEnvironmentWhereInput
  }

  export type ProjectEnvironmentUpdateToOneWithWhereWithoutServiceEnvironmentsInput = {
    where?: ProjectEnvironmentWhereInput
    data: XOR<ProjectEnvironmentUpdateWithoutServiceEnvironmentsInput, ProjectEnvironmentUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type ProjectEnvironmentUpdateWithoutServiceEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutServiceEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type RegistryUpsertWithoutServiceEnvironmentsInput = {
    update: XOR<RegistryUpdateWithoutServiceEnvironmentsInput, RegistryUncheckedUpdateWithoutServiceEnvironmentsInput>
    create: XOR<RegistryCreateWithoutServiceEnvironmentsInput, RegistryUncheckedCreateWithoutServiceEnvironmentsInput>
    where?: RegistryWhereInput
  }

  export type RegistryUpdateToOneWithWhereWithoutServiceEnvironmentsInput = {
    where?: RegistryWhereInput
    data: XOR<RegistryUpdateWithoutServiceEnvironmentsInput, RegistryUncheckedUpdateWithoutServiceEnvironmentsInput>
  }

  export type RegistryUpdateWithoutServiceEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUpdateManyWithoutRegistriesNestedInput
  }

  export type RegistryUncheckedUpdateWithoutServiceEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironments?: ProjectEnvironmentUncheckedUpdateManyWithoutRegistriesNestedInput
  }

  export type ProjectEnvironmentCreateWithoutBuildsInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutBuildsInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutBuildsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutBuildsInput, ProjectEnvironmentUncheckedCreateWithoutBuildsInput>
  }

  export type ProjectEnvironmentUpsertWithoutBuildsInput = {
    update: XOR<ProjectEnvironmentUpdateWithoutBuildsInput, ProjectEnvironmentUncheckedUpdateWithoutBuildsInput>
    create: XOR<ProjectEnvironmentCreateWithoutBuildsInput, ProjectEnvironmentUncheckedCreateWithoutBuildsInput>
    where?: ProjectEnvironmentWhereInput
  }

  export type ProjectEnvironmentUpdateToOneWithWhereWithoutBuildsInput = {
    where?: ProjectEnvironmentWhereInput
    data: XOR<ProjectEnvironmentUpdateWithoutBuildsInput, ProjectEnvironmentUncheckedUpdateWithoutBuildsInput>
  }

  export type ProjectEnvironmentUpdateWithoutBuildsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutBuildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentCreateWithoutDeploymentsInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutDeploymentsInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutDeploymentsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutDeploymentsInput, ProjectEnvironmentUncheckedCreateWithoutDeploymentsInput>
  }

  export type ProjectEnvironmentUpsertWithoutDeploymentsInput = {
    update: XOR<ProjectEnvironmentUpdateWithoutDeploymentsInput, ProjectEnvironmentUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<ProjectEnvironmentCreateWithoutDeploymentsInput, ProjectEnvironmentUncheckedCreateWithoutDeploymentsInput>
    where?: ProjectEnvironmentWhereInput
  }

  export type ProjectEnvironmentUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: ProjectEnvironmentWhereInput
    data: XOR<ProjectEnvironmentUpdateWithoutDeploymentsInput, ProjectEnvironmentUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ProjectEnvironmentUpdateWithoutDeploymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutDeploymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentCreateWithoutClusterInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutClusterInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutClusterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput>
  }

  export type ProjectEnvironmentCreateManyClusterInputEnvelope = {
    data: ProjectEnvironmentCreateManyClusterInput | ProjectEnvironmentCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutClusterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutClusterInput, ProjectEnvironmentUncheckedUpdateWithoutClusterInput>
    create: XOR<ProjectEnvironmentCreateWithoutClusterInput, ProjectEnvironmentUncheckedCreateWithoutClusterInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutClusterInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutClusterInput, ProjectEnvironmentUncheckedUpdateWithoutClusterInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutClusterInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutClusterInput>
  }

  export type ProjectEnvironmentCreateWithoutNamespaceInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutNamespaceInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutNamespaceInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput>
  }

  export type ProjectEnvironmentCreateManyNamespaceInputEnvelope = {
    data: ProjectEnvironmentCreateManyNamespaceInput | ProjectEnvironmentCreateManyNamespaceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutNamespaceInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutNamespaceInput, ProjectEnvironmentUncheckedUpdateWithoutNamespaceInput>
    create: XOR<ProjectEnvironmentCreateWithoutNamespaceInput, ProjectEnvironmentUncheckedCreateWithoutNamespaceInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutNamespaceInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutNamespaceInput, ProjectEnvironmentUncheckedUpdateWithoutNamespaceInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutNamespaceInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutNamespaceInput>
  }

  export type ProjectEnvironmentCreateWithoutRegistriesInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    vmGroups?: VmGroupCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutRegistriesInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vmGroups?: VmGroupUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutRegistriesInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput>
  }

  export type ServiceEnvironmentCreateWithoutRegistryInput = {
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutServiceEnvironmentsInput
    projectEnvironment: ProjectEnvironmentCreateNestedOneWithoutServiceEnvironmentsInput
  }

  export type ServiceEnvironmentUncheckedCreateWithoutRegistryInput = {
    id?: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentCreateOrConnectWithoutRegistryInput = {
    where: ServiceEnvironmentWhereUniqueInput
    create: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput>
  }

  export type ServiceEnvironmentCreateManyRegistryInputEnvelope = {
    data: ServiceEnvironmentCreateManyRegistryInput | ServiceEnvironmentCreateManyRegistryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutRegistriesInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutRegistriesInput, ProjectEnvironmentUncheckedUpdateWithoutRegistriesInput>
    create: XOR<ProjectEnvironmentCreateWithoutRegistriesInput, ProjectEnvironmentUncheckedCreateWithoutRegistriesInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutRegistriesInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutRegistriesInput, ProjectEnvironmentUncheckedUpdateWithoutRegistriesInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutRegistriesInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutRegistriesInput>
  }

  export type ServiceEnvironmentUpsertWithWhereUniqueWithoutRegistryInput = {
    where: ServiceEnvironmentWhereUniqueInput
    update: XOR<ServiceEnvironmentUpdateWithoutRegistryInput, ServiceEnvironmentUncheckedUpdateWithoutRegistryInput>
    create: XOR<ServiceEnvironmentCreateWithoutRegistryInput, ServiceEnvironmentUncheckedCreateWithoutRegistryInput>
  }

  export type ServiceEnvironmentUpdateWithWhereUniqueWithoutRegistryInput = {
    where: ServiceEnvironmentWhereUniqueInput
    data: XOR<ServiceEnvironmentUpdateWithoutRegistryInput, ServiceEnvironmentUncheckedUpdateWithoutRegistryInput>
  }

  export type ServiceEnvironmentUpdateManyWithWhereWithoutRegistryInput = {
    where: ServiceEnvironmentScalarWhereInput
    data: XOR<ServiceEnvironmentUpdateManyMutationInput, ServiceEnvironmentUncheckedUpdateManyWithoutRegistryInput>
  }

  export type ProjectEnvironmentCreateWithoutVmGroupsInput = {
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectEnvironmentsInput
    environmentMaster: EnvironmentMasterCreateNestedOneWithoutProjectEnvironmentsInput
    cluster: ClusterCreateNestedOneWithoutProjectEnvironmentsInput
    namespace: NamespaceCreateNestedOneWithoutProjectEnvironmentsInput
    registries?: RegistryCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    registries?: RegistryUncheckedCreateNestedManyWithoutProjectEnvironmentsInput
    serviceEnvironments?: ServiceEnvironmentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    builds?: BuildDetailsUncheckedCreateNestedManyWithoutProjectEnvironmentInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectEnvironmentInput
  }

  export type ProjectEnvironmentCreateOrConnectWithoutVmGroupsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    create: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput>
  }

  export type ProjectEnvironmentUpsertWithWhereUniqueWithoutVmGroupsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    update: XOR<ProjectEnvironmentUpdateWithoutVmGroupsInput, ProjectEnvironmentUncheckedUpdateWithoutVmGroupsInput>
    create: XOR<ProjectEnvironmentCreateWithoutVmGroupsInput, ProjectEnvironmentUncheckedCreateWithoutVmGroupsInput>
  }

  export type ProjectEnvironmentUpdateWithWhereUniqueWithoutVmGroupsInput = {
    where: ProjectEnvironmentWhereUniqueInput
    data: XOR<ProjectEnvironmentUpdateWithoutVmGroupsInput, ProjectEnvironmentUncheckedUpdateWithoutVmGroupsInput>
  }

  export type ProjectEnvironmentUpdateManyWithWhereWithoutVmGroupsInput = {
    where: ProjectEnvironmentScalarWhereInput
    data: XOR<ProjectEnvironmentUpdateManyMutationInput, ProjectEnvironmentUncheckedUpdateManyWithoutVmGroupsInput>
  }

  export type ServiceCreateManyProjectInput = {
    id?: number
    name: string
    buildStrategy: $Enums.BuildStrategy
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    repoUrl: string
    businessFunction?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentCreateManyProjectInput = {
    id?: number
    name: string
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    buildStrategy?: EnumBuildStrategyFieldUpdateOperationsInput | $Enums.BuildStrategy
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    repoUrl?: StringFieldUpdateOperationsInput | string
    businessFunction?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentCreateManyServiceInput = {
    id?: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceEnvironmentUpdateWithoutServiceInput = {
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectEnvironment?: ProjectEnvironmentUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
    registry?: RegistryUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
  }

  export type ServiceEnvironmentUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentCreateManyEnvironmentMasterInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentUpdateWithoutEnvironmentMasterInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutEnvironmentMasterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutEnvironmentMasterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentCreateManyProjectEnvironmentInput = {
    id?: number
    serviceId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    registryId: number
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildDetailsCreateManyProjectEnvironmentInput = {
    id?: number
    gitRepoId: number
    typeLabel?: string | null
    dockerfilePath: string
    depth?: number
    shallowCloning?: boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsCreatebuildxPlatformInput | string[]
    branchName: string
    projectJobTemplateId?: number | null
    projectCiScopeId?: number | null
    sonarProjectKey?: string | null
    queueName?: string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateManyProjectEnvironmentInput = {
    id?: number
    serviceName: string
    deploymentName: string
    deployVariableRawInput?: boolean
    deploymentRollbackValidation?: boolean
    deploymentNames?: DeploymentCreatedeploymentNamesInput | string[]
    preHookEnabled?: boolean
    postHookEnabled?: boolean
    imagePullPolicy?: $Enums.ImagePullPolicy
    resourceKind?: $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistryUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutRegistryNestedInput
  }

  export type RegistryUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutRegistryNestedInput
  }

  export type RegistryUncheckedUpdateManyWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VmGroupUpdateWithoutProjectEnvironmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VmGroupUncheckedUpdateWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUpdateWithoutProjectEnvironmentInput = {
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
    registry?: RegistryUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
  }

  export type ServiceEnvironmentUncheckedUpdateWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    registryId?: IntFieldUpdateOperationsInput | number
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsUpdateWithoutProjectEnvironmentInput = {
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsUncheckedUpdateWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    gitRepoId?: IntFieldUpdateOperationsInput | number
    typeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    shallowCloning?: BoolFieldUpdateOperationsInput | boolean
    customParameters?: NullableJsonNullValueInput | InputJsonValue
    buildxPlatform?: BuildDetailsUpdatebuildxPlatformInput | string[]
    branchName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    projectCiScopeId?: NullableIntFieldUpdateOperationsInput | number | null
    sonarProjectKey?: NullableStringFieldUpdateOperationsInput | string | null
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    envCiBuildVariable?: JsonNullValueInput | InputJsonValue
    envCiHook?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUpdateWithoutProjectEnvironmentInput = {
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectEnvironmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceName?: StringFieldUpdateOperationsInput | string
    deploymentName?: StringFieldUpdateOperationsInput | string
    deployVariableRawInput?: BoolFieldUpdateOperationsInput | boolean
    deploymentRollbackValidation?: BoolFieldUpdateOperationsInput | boolean
    deploymentNames?: DeploymentUpdatedeploymentNamesInput | string[]
    preHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    postHookEnabled?: BoolFieldUpdateOperationsInput | boolean
    imagePullPolicy?: EnumImagePullPolicyFieldUpdateOperationsInput | $Enums.ImagePullPolicy
    resourceKind?: EnumResourceKindFieldUpdateOperationsInput | $Enums.ResourceKind
    envCdHook?: JsonNullValueInput | InputJsonValue
    queueName?: NullableStringFieldUpdateOperationsInput | string | null
    manifestMetaData?: JsonNullValueInput | InputJsonValue
    envCdDeploymentStrategy?: JsonNullValueInput | InputJsonValue
    envCdDeployVariable?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentCreateManyClusterInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    namespaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentUpdateWithoutClusterInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutClusterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutClusterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentCreateManyNamespaceInput = {
    id?: number
    name: string
    projectId: number
    vaultAccessToken?: string | null
    sonarAccessToken?: string | null
    environmentMasterId: number
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    clusterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentUpdateWithoutNamespaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutNamespaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutNamespaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentCreateManyRegistryInput = {
    id?: number
    serviceId: number
    projectEnvironmentId: number
    componentId: number
    imageName: string
    envRoleAccess?: ServiceEnvironmentCreateenvRoleAccessInput | string[]
    manualBuild?: boolean
    manualDeploy?: boolean
    hyperBuild?: boolean
    artifactName: string
    projectJobTemplateId: number
    templateVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEnvironmentUpdateWithoutRegistriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    vmGroups?: VmGroupUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutRegistriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vmGroups?: VmGroupUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutRegistriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUpdateWithoutRegistryInput = {
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
    projectEnvironment?: ProjectEnvironmentUpdateOneRequiredWithoutServiceEnvironmentsNestedInput
  }

  export type ServiceEnvironmentUncheckedUpdateWithoutRegistryInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEnvironmentUncheckedUpdateManyWithoutRegistryInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    projectEnvironmentId?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    imageName?: StringFieldUpdateOperationsInput | string
    envRoleAccess?: ServiceEnvironmentUpdateenvRoleAccessInput | string[]
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    artifactName?: StringFieldUpdateOperationsInput | string
    projectJobTemplateId?: IntFieldUpdateOperationsInput | number
    templateVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEnvironmentUpdateWithoutVmGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    environmentMaster?: EnvironmentMasterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    cluster?: ClusterUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    namespace?: NamespaceUpdateOneRequiredWithoutProjectEnvironmentsNestedInput
    registries?: RegistryUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateWithoutVmGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registries?: RegistryUncheckedUpdateManyWithoutProjectEnvironmentsNestedInput
    serviceEnvironments?: ServiceEnvironmentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    builds?: BuildDetailsUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectEnvironmentNestedInput
  }

  export type ProjectEnvironmentUncheckedUpdateManyWithoutVmGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    vaultAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    sonarAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    environmentMasterId?: IntFieldUpdateOperationsInput | number
    manualBuild?: BoolFieldUpdateOperationsInput | boolean
    manualDeploy?: BoolFieldUpdateOperationsInput | boolean
    hyperBuild?: BoolFieldUpdateOperationsInput | boolean
    clusterId?: IntFieldUpdateOperationsInput | number
    namespaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvironmentMasterCountOutputTypeDefaultArgs instead
     */
    export type EnvironmentMasterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvironmentMasterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectEnvironmentCountOutputTypeDefaultArgs instead
     */
    export type ProjectEnvironmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectEnvironmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClusterCountOutputTypeDefaultArgs instead
     */
    export type ClusterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClusterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NamespaceCountOutputTypeDefaultArgs instead
     */
    export type NamespaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NamespaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistryCountOutputTypeDefaultArgs instead
     */
    export type RegistryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VmGroupCountOutputTypeDefaultArgs instead
     */
    export type VmGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VmGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvironmentMasterDefaultArgs instead
     */
    export type EnvironmentMasterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvironmentMasterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectEnvironmentDefaultArgs instead
     */
    export type ProjectEnvironmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectEnvironmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceEnvironmentDefaultArgs instead
     */
    export type ServiceEnvironmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceEnvironmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildDetailsDefaultArgs instead
     */
    export type BuildDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeploymentDefaultArgs instead
     */
    export type DeploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeploymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClusterDefaultArgs instead
     */
    export type ClusterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClusterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NamespaceDefaultArgs instead
     */
    export type NamespaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NamespaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistryDefaultArgs instead
     */
    export type RegistryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VmGroupDefaultArgs instead
     */
    export type VmGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VmGroupDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}