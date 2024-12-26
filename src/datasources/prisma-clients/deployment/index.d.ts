
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
 * Model ServiceType
 * 
 */
export type ServiceType = $Result.DefaultSelection<Prisma.$ServiceTypePayload>
/**
 * Model ServiceSubtype
 * 
 */
export type ServiceSubtype = $Result.DefaultSelection<Prisma.$ServiceSubtypePayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model ProviderType
 * 
 */
export type ProviderType = $Result.DefaultSelection<Prisma.$ProviderTypePayload>
/**
 * Model PricingPlan
 * 
 */
export type PricingPlan = $Result.DefaultSelection<Prisma.$PricingPlanPayload>
/**
 * Model Environment
 * 
 */
export type Environment = $Result.DefaultSelection<Prisma.$EnvironmentPayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model MonitoringConfig
 * 
 */
export type MonitoringConfig = $Result.DefaultSelection<Prisma.$MonitoringConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BillingUnit: {
  HOUR: 'HOUR',
  DAY: 'DAY',
  MONTH: 'MONTH'
};

export type BillingUnit = (typeof BillingUnit)[keyof typeof BillingUnit]


export const DeploymentStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  ROLLBACK: 'ROLLBACK'
};

export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus]

}

export type BillingUnit = $Enums.BillingUnit

export const BillingUnit: typeof $Enums.BillingUnit

export type DeploymentStatus = $Enums.DeploymentStatus

export const DeploymentStatus: typeof $Enums.DeploymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.serviceType`: Exposes CRUD operations for the **ServiceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceTypes
    * const serviceTypes = await prisma.serviceType.findMany()
    * ```
    */
  get serviceType(): Prisma.ServiceTypeDelegate<ExtArgs>;

  /**
   * `prisma.serviceSubtype`: Exposes CRUD operations for the **ServiceSubtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceSubtypes
    * const serviceSubtypes = await prisma.serviceSubtype.findMany()
    * ```
    */
  get serviceSubtype(): Prisma.ServiceSubtypeDelegate<ExtArgs>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs>;

  /**
   * `prisma.providerType`: Exposes CRUD operations for the **ProviderType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderTypes
    * const providerTypes = await prisma.providerType.findMany()
    * ```
    */
  get providerType(): Prisma.ProviderTypeDelegate<ExtArgs>;

  /**
   * `prisma.pricingPlan`: Exposes CRUD operations for the **PricingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingPlans
    * const pricingPlans = await prisma.pricingPlan.findMany()
    * ```
    */
  get pricingPlan(): Prisma.PricingPlanDelegate<ExtArgs>;

  /**
   * `prisma.environment`: Exposes CRUD operations for the **Environment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Environments
    * const environments = await prisma.environment.findMany()
    * ```
    */
  get environment(): Prisma.EnvironmentDelegate<ExtArgs>;

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
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.monitoringConfig`: Exposes CRUD operations for the **MonitoringConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonitoringConfigs
    * const monitoringConfigs = await prisma.monitoringConfig.findMany()
    * ```
    */
  get monitoringConfig(): Prisma.MonitoringConfigDelegate<ExtArgs>;
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
    Project: 'Project',
    Service: 'Service',
    ServiceType: 'ServiceType',
    ServiceSubtype: 'ServiceSubtype',
    Provider: 'Provider',
    ProviderType: 'ProviderType',
    PricingPlan: 'PricingPlan',
    Environment: 'Environment',
    Deployment: 'Deployment',
    Plan: 'Plan',
    MonitoringConfig: 'MonitoringConfig'
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
      modelProps: "project" | "service" | "serviceType" | "serviceSubtype" | "provider" | "providerType" | "pricingPlan" | "environment" | "deployment" | "plan" | "monitoringConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      ServiceType: {
        payload: Prisma.$ServiceTypePayload<ExtArgs>
        fields: Prisma.ServiceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findFirst: {
            args: Prisma.ServiceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findMany: {
            args: Prisma.ServiceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          create: {
            args: Prisma.ServiceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          createMany: {
            args: Prisma.ServiceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          delete: {
            args: Prisma.ServiceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          update: {
            args: Prisma.ServiceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          deleteMany: {
            args: Prisma.ServiceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          aggregate: {
            args: Prisma.ServiceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceType>
          }
          groupBy: {
            args: Prisma.ServiceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeCountAggregateOutputType> | number
          }
        }
      }
      ServiceSubtype: {
        payload: Prisma.$ServiceSubtypePayload<ExtArgs>
        fields: Prisma.ServiceSubtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceSubtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceSubtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          findFirst: {
            args: Prisma.ServiceSubtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceSubtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          findMany: {
            args: Prisma.ServiceSubtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>[]
          }
          create: {
            args: Prisma.ServiceSubtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          createMany: {
            args: Prisma.ServiceSubtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceSubtypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>[]
          }
          delete: {
            args: Prisma.ServiceSubtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          update: {
            args: Prisma.ServiceSubtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          deleteMany: {
            args: Prisma.ServiceSubtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceSubtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceSubtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSubtypePayload>
          }
          aggregate: {
            args: Prisma.ServiceSubtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceSubtype>
          }
          groupBy: {
            args: Prisma.ServiceSubtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceSubtypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceSubtypeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceSubtypeCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      ProviderType: {
        payload: Prisma.$ProviderTypePayload<ExtArgs>
        fields: Prisma.ProviderTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          findFirst: {
            args: Prisma.ProviderTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          findMany: {
            args: Prisma.ProviderTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>[]
          }
          create: {
            args: Prisma.ProviderTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          createMany: {
            args: Prisma.ProviderTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>[]
          }
          delete: {
            args: Prisma.ProviderTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          update: {
            args: Prisma.ProviderTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          deleteMany: {
            args: Prisma.ProviderTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderTypePayload>
          }
          aggregate: {
            args: Prisma.ProviderTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderType>
          }
          groupBy: {
            args: Prisma.ProviderTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderTypeCountAggregateOutputType> | number
          }
        }
      }
      PricingPlan: {
        payload: Prisma.$PricingPlanPayload<ExtArgs>
        fields: Prisma.PricingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findFirst: {
            args: Prisma.PricingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findMany: {
            args: Prisma.PricingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          create: {
            args: Prisma.PricingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          createMany: {
            args: Prisma.PricingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          delete: {
            args: Prisma.PricingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          update: {
            args: Prisma.PricingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          deleteMany: {
            args: Prisma.PricingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          aggregate: {
            args: Prisma.PricingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingPlan>
          }
          groupBy: {
            args: Prisma.PricingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanCountAggregateOutputType> | number
          }
        }
      }
      Environment: {
        payload: Prisma.$EnvironmentPayload<ExtArgs>
        fields: Prisma.EnvironmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          findMany: {
            args: Prisma.EnvironmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>[]
          }
          create: {
            args: Prisma.EnvironmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          createMany: {
            args: Prisma.EnvironmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          update: {
            args: Prisma.EnvironmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnvironmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironment>
          }
          groupBy: {
            args: Prisma.EnvironmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentCountAggregateOutputType> | number
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
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      MonitoringConfig: {
        payload: Prisma.$MonitoringConfigPayload<ExtArgs>
        fields: Prisma.MonitoringConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          findFirst: {
            args: Prisma.MonitoringConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          findMany: {
            args: Prisma.MonitoringConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>[]
          }
          create: {
            args: Prisma.MonitoringConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          createMany: {
            args: Prisma.MonitoringConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>[]
          }
          delete: {
            args: Prisma.MonitoringConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          update: {
            args: Prisma.MonitoringConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonitoringConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringConfigPayload>
          }
          aggregate: {
            args: Prisma.MonitoringConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoringConfig>
          }
          groupBy: {
            args: Prisma.MonitoringConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringConfigCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringConfigCountAggregateOutputType> | number
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
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ProjectCountOutputTypeCountServicesArgs
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
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    deployments: number
    deployedIn: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | ServiceCountOutputTypeCountDeploymentsArgs
    deployedIn?: boolean | ServiceCountOutputTypeCountDeployedInArgs
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
  export type ServiceCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountDeployedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }


  /**
   * Count Type ServiceTypeCountOutputType
   */

  export type ServiceTypeCountOutputType = {
    subtypes: number
    services: number
  }

  export type ServiceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtypes?: boolean | ServiceTypeCountOutputTypeCountSubtypesArgs
    services?: boolean | ServiceTypeCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceTypeCountOutputType
     */
    select?: ServiceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeCountSubtypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceSubtypeWhereInput
  }

  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceSubtypeCountOutputType
   */

  export type ServiceSubtypeCountOutputType = {
    services: number
  }

  export type ServiceSubtypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceSubtypeCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceSubtypeCountOutputType without action
   */
  export type ServiceSubtypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtypeCountOutputType
     */
    select?: ServiceSubtypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceSubtypeCountOutputType without action
   */
  export type ServiceSubtypeCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    pricingPlans: number
    plans: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingPlans?: boolean | ProviderCountOutputTypeCountPricingPlansArgs
    plans?: boolean | ProviderCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountPricingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Count Type ProviderTypeCountOutputType
   */

  export type ProviderTypeCountOutputType = {
    providers: number
  }

  export type ProviderTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | ProviderTypeCountOutputTypeCountProvidersArgs
  }

  // Custom InputTypes
  /**
   * ProviderTypeCountOutputType without action
   */
  export type ProviderTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderTypeCountOutputType
     */
    select?: ProviderTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderTypeCountOutputType without action
   */
  export type ProviderTypeCountOutputTypeCountProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
  }


  /**
   * Count Type PricingPlanCountOutputType
   */

  export type PricingPlanCountOutputType = {
    plans: number
  }

  export type PricingPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | PricingPlanCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * PricingPlanCountOutputType without action
   */
  export type PricingPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlanCountOutputType
     */
    select?: PricingPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PricingPlanCountOutputType without action
   */
  export type PricingPlanCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Count Type EnvironmentCountOutputType
   */

  export type EnvironmentCountOutputType = {
    deployments: number
  }

  export type EnvironmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | EnvironmentCountOutputTypeCountDeploymentsArgs
  }

  // Custom InputTypes
  /**
   * EnvironmentCountOutputType without action
   */
  export type EnvironmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentCountOutputType
     */
    select?: EnvironmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvironmentCountOutputType without action
   */
  export type EnvironmentCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }


  /**
   * Count Type DeploymentCountOutputType
   */

  export type DeploymentCountOutputType = {
    microServices: number
  }

  export type DeploymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microServices?: boolean | DeploymentCountOutputTypeCountMicroServicesArgs
  }

  // Custom InputTypes
  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentCountOutputType
     */
    select?: DeploymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeCountMicroServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    deployments: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | PlanCountOutputTypeCountDeploymentsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }


  /**
   * Count Type MonitoringConfigCountOutputType
   */

  export type MonitoringConfigCountOutputType = {
    deployments: number
    plans: number
  }

  export type MonitoringConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | MonitoringConfigCountOutputTypeCountDeploymentsArgs
    plans?: boolean | MonitoringConfigCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * MonitoringConfigCountOutputType without action
   */
  export type MonitoringConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfigCountOutputType
     */
    select?: MonitoringConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonitoringConfigCountOutputType without action
   */
  export type MonitoringConfigCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * MonitoringConfigCountOutputType without action
   */
  export type MonitoringConfigCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
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
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
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
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Project$servicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Project$servicesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      ownerId: string
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
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
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
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    gitRepoUrl: string | null
    typeId: string | null
    subtypeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    gitRepoUrl: string | null
    typeId: string | null
    subtypeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    gitRepoUrl: number
    typeId: number
    subtypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    gitRepoUrl?: true
    typeId?: true
    subtypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    gitRepoUrl?: true
    typeId?: true
    subtypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    gitRepoUrl?: true
    typeId?: true
    subtypeId?: true
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
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    subtypeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
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
    gitRepoUrl?: boolean
    typeId?: boolean
    subtypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    deployments?: boolean | Service$deploymentsArgs<ExtArgs>
    type?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    subtype?: boolean | Service$subtypeArgs<ExtArgs>
    deployedIn?: boolean | Service$deployedInArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    gitRepoUrl?: boolean
    typeId?: boolean
    subtypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    type?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    subtype?: boolean | Service$subtypeArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    gitRepoUrl?: boolean
    typeId?: boolean
    subtypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    deployments?: boolean | Service$deploymentsArgs<ExtArgs>
    type?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    subtype?: boolean | Service$subtypeArgs<ExtArgs>
    deployedIn?: boolean | Service$deployedInArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    type?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    subtype?: boolean | Service$subtypeArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      type: Prisma.$ServiceTypePayload<ExtArgs>
      subtype: Prisma.$ServiceSubtypePayload<ExtArgs> | null
      deployedIn: Prisma.$DeploymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      gitRepoUrl: string
      typeId: string
      subtypeId: string | null
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
    deployments<T extends Service$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
    type<T extends ServiceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceTypeDefaultArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subtype<T extends Service$subtypeArgs<ExtArgs> = {}>(args?: Subset<T, Service$subtypeArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    deployedIn<T extends Service$deployedInArgs<ExtArgs> = {}>(args?: Subset<T, Service$deployedInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly projectId: FieldRef<"Service", 'String'>
    readonly gitRepoUrl: FieldRef<"Service", 'String'>
    readonly typeId: FieldRef<"Service", 'String'>
    readonly subtypeId: FieldRef<"Service", 'String'>
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
   * Service.deployments
   */
  export type Service$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Service.subtype
   */
  export type Service$subtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    where?: ServiceSubtypeWhereInput
  }

  /**
   * Service.deployedIn
   */
  export type Service$deployedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ServiceType
   */

  export type AggregateServiceType = {
    _count: ServiceTypeCountAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  export type ServiceTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ServiceTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ServiceTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ServiceTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServiceTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ServiceTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ServiceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceType to aggregate.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceTypes
    **/
    _count?: true | ServiceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type GetServiceTypeAggregateType<T extends ServiceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceType[P]>
      : GetScalarType<T[P], AggregateServiceType[P]>
  }




  export type ServiceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceTypeWhereInput
    orderBy?: ServiceTypeOrderByWithAggregationInput | ServiceTypeOrderByWithAggregationInput[]
    by: ServiceTypeScalarFieldEnum[] | ServiceTypeScalarFieldEnum
    having?: ServiceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceTypeCountAggregateInputType | true
    _min?: ServiceTypeMinAggregateInputType
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type ServiceTypeGroupByOutputType = {
    id: string
    name: string
    _count: ServiceTypeCountAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  type GetServiceTypeGroupByPayload<T extends ServiceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
        }
      >
    >


  export type ServiceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subtypes?: boolean | ServiceType$subtypesArgs<ExtArgs>
    services?: boolean | ServiceType$servicesArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceType"]>

  export type ServiceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["serviceType"]>

  export type ServiceTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ServiceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtypes?: boolean | ServiceType$subtypesArgs<ExtArgs>
    services?: boolean | ServiceType$servicesArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceType"
    objects: {
      subtypes: Prisma.$ServiceSubtypePayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["serviceType"]>
    composites: {}
  }

  type ServiceTypeGetPayload<S extends boolean | null | undefined | ServiceTypeDefaultArgs> = $Result.GetResult<Prisma.$ServiceTypePayload, S>

  type ServiceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceTypeCountAggregateInputType | true
    }

  export interface ServiceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceType'], meta: { name: 'ServiceType' } }
    /**
     * Find zero or one ServiceType that matches the filter.
     * @param {ServiceTypeFindUniqueArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceTypeFindUniqueArgs>(args: SelectSubset<T, ServiceTypeFindUniqueArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceTypeFindUniqueOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceTypeFindFirstArgs>(args?: SelectSubset<T, ServiceTypeFindFirstArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany()
     * 
     * // Get first 10 ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceTypeWithIdOnly = await prisma.serviceType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceTypeFindManyArgs>(args?: SelectSubset<T, ServiceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceType.
     * @param {ServiceTypeCreateArgs} args - Arguments to create a ServiceType.
     * @example
     * // Create one ServiceType
     * const ServiceType = await prisma.serviceType.create({
     *   data: {
     *     // ... data to create a ServiceType
     *   }
     * })
     * 
     */
    create<T extends ServiceTypeCreateArgs>(args: SelectSubset<T, ServiceTypeCreateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceTypes.
     * @param {ServiceTypeCreateManyArgs} args - Arguments to create many ServiceTypes.
     * @example
     * // Create many ServiceTypes
     * const serviceType = await prisma.serviceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceTypeCreateManyArgs>(args?: SelectSubset<T, ServiceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceTypes and returns the data saved in the database.
     * @param {ServiceTypeCreateManyAndReturnArgs} args - Arguments to create many ServiceTypes.
     * @example
     * // Create many ServiceTypes
     * const serviceType = await prisma.serviceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceTypes and only return the `id`
     * const serviceTypeWithIdOnly = await prisma.serviceType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceType.
     * @param {ServiceTypeDeleteArgs} args - Arguments to delete one ServiceType.
     * @example
     * // Delete one ServiceType
     * const ServiceType = await prisma.serviceType.delete({
     *   where: {
     *     // ... filter to delete one ServiceType
     *   }
     * })
     * 
     */
    delete<T extends ServiceTypeDeleteArgs>(args: SelectSubset<T, ServiceTypeDeleteArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceType.
     * @param {ServiceTypeUpdateArgs} args - Arguments to update one ServiceType.
     * @example
     * // Update one ServiceType
     * const serviceType = await prisma.serviceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceTypeUpdateArgs>(args: SelectSubset<T, ServiceTypeUpdateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceTypes.
     * @param {ServiceTypeDeleteManyArgs} args - Arguments to filter ServiceTypes to delete.
     * @example
     * // Delete a few ServiceTypes
     * const { count } = await prisma.serviceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceTypeDeleteManyArgs>(args?: SelectSubset<T, ServiceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceTypes
     * const serviceType = await prisma.serviceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceTypeUpdateManyArgs>(args: SelectSubset<T, ServiceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceType.
     * @param {ServiceTypeUpsertArgs} args - Arguments to update or create a ServiceType.
     * @example
     * // Update or create a ServiceType
     * const serviceType = await prisma.serviceType.upsert({
     *   create: {
     *     // ... data to create a ServiceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceType we want to update
     *   }
     * })
     */
    upsert<T extends ServiceTypeUpsertArgs>(args: SelectSubset<T, ServiceTypeUpsertArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeCountArgs} args - Arguments to filter ServiceTypes to count.
     * @example
     * // Count the number of ServiceTypes
     * const count = await prisma.serviceType.count({
     *   where: {
     *     // ... the filter for the ServiceTypes we want to count
     *   }
     * })
    **/
    count<T extends ServiceTypeCountArgs>(
      args?: Subset<T, ServiceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceTypeAggregateArgs>(args: Subset<T, ServiceTypeAggregateArgs>): Prisma.PrismaPromise<GetServiceTypeAggregateType<T>>

    /**
     * Group by ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeGroupByArgs} args - Group by arguments.
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
      T extends ServiceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceTypeGroupByArgs['orderBy'] }
        : { orderBy?: ServiceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceType model
   */
  readonly fields: ServiceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtypes<T extends ServiceType$subtypesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceType$subtypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findMany"> | Null>
    services<T extends ServiceType$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceType$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ServiceType model
   */ 
  interface ServiceTypeFieldRefs {
    readonly id: FieldRef<"ServiceType", 'String'>
    readonly name: FieldRef<"ServiceType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceType findUnique
   */
  export type ServiceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findUniqueOrThrow
   */
  export type ServiceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findFirst
   */
  export type ServiceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findFirstOrThrow
   */
  export type ServiceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findMany
   */
  export type ServiceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceTypes to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType create
   */
  export type ServiceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceType.
     */
    data: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
  }

  /**
   * ServiceType createMany
   */
  export type ServiceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceTypes.
     */
    data: ServiceTypeCreateManyInput | ServiceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceType createManyAndReturn
   */
  export type ServiceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceTypes.
     */
    data: ServiceTypeCreateManyInput | ServiceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceType update
   */
  export type ServiceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceType.
     */
    data: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
    /**
     * Choose, which ServiceType to update.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType updateMany
   */
  export type ServiceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceTypes.
     */
    data: XOR<ServiceTypeUpdateManyMutationInput, ServiceTypeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceTypes to update
     */
    where?: ServiceTypeWhereInput
  }

  /**
   * ServiceType upsert
   */
  export type ServiceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceType to update in case it exists.
     */
    where: ServiceTypeWhereUniqueInput
    /**
     * In case the ServiceType found by the `where` argument doesn't exist, create a new ServiceType with this data.
     */
    create: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
    /**
     * In case the ServiceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
  }

  /**
   * ServiceType delete
   */
  export type ServiceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter which ServiceType to delete.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType deleteMany
   */
  export type ServiceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceTypes to delete
     */
    where?: ServiceTypeWhereInput
  }

  /**
   * ServiceType.subtypes
   */
  export type ServiceType$subtypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    where?: ServiceSubtypeWhereInput
    orderBy?: ServiceSubtypeOrderByWithRelationInput | ServiceSubtypeOrderByWithRelationInput[]
    cursor?: ServiceSubtypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceSubtypeScalarFieldEnum | ServiceSubtypeScalarFieldEnum[]
  }

  /**
   * ServiceType.services
   */
  export type ServiceType$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ServiceType without action
   */
  export type ServiceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
  }


  /**
   * Model ServiceSubtype
   */

  export type AggregateServiceSubtype = {
    _count: ServiceSubtypeCountAggregateOutputType | null
    _min: ServiceSubtypeMinAggregateOutputType | null
    _max: ServiceSubtypeMaxAggregateOutputType | null
  }

  export type ServiceSubtypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    serviceTypeId: string | null
  }

  export type ServiceSubtypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serviceTypeId: string | null
  }

  export type ServiceSubtypeCountAggregateOutputType = {
    id: number
    name: number
    serviceTypeId: number
    _all: number
  }


  export type ServiceSubtypeMinAggregateInputType = {
    id?: true
    name?: true
    serviceTypeId?: true
  }

  export type ServiceSubtypeMaxAggregateInputType = {
    id?: true
    name?: true
    serviceTypeId?: true
  }

  export type ServiceSubtypeCountAggregateInputType = {
    id?: true
    name?: true
    serviceTypeId?: true
    _all?: true
  }

  export type ServiceSubtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceSubtype to aggregate.
     */
    where?: ServiceSubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSubtypes to fetch.
     */
    orderBy?: ServiceSubtypeOrderByWithRelationInput | ServiceSubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceSubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSubtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSubtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceSubtypes
    **/
    _count?: true | ServiceSubtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceSubtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceSubtypeMaxAggregateInputType
  }

  export type GetServiceSubtypeAggregateType<T extends ServiceSubtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceSubtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceSubtype[P]>
      : GetScalarType<T[P], AggregateServiceSubtype[P]>
  }




  export type ServiceSubtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceSubtypeWhereInput
    orderBy?: ServiceSubtypeOrderByWithAggregationInput | ServiceSubtypeOrderByWithAggregationInput[]
    by: ServiceSubtypeScalarFieldEnum[] | ServiceSubtypeScalarFieldEnum
    having?: ServiceSubtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceSubtypeCountAggregateInputType | true
    _min?: ServiceSubtypeMinAggregateInputType
    _max?: ServiceSubtypeMaxAggregateInputType
  }

  export type ServiceSubtypeGroupByOutputType = {
    id: string
    name: string
    serviceTypeId: string
    _count: ServiceSubtypeCountAggregateOutputType | null
    _min: ServiceSubtypeMinAggregateOutputType | null
    _max: ServiceSubtypeMaxAggregateOutputType | null
  }

  type GetServiceSubtypeGroupByPayload<T extends ServiceSubtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceSubtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceSubtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceSubtypeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceSubtypeGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSubtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceTypeId?: boolean
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    services?: boolean | ServiceSubtype$servicesArgs<ExtArgs>
    _count?: boolean | ServiceSubtypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceSubtype"]>

  export type ServiceSubtypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceTypeId?: boolean
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceSubtype"]>

  export type ServiceSubtypeSelectScalar = {
    id?: boolean
    name?: boolean
    serviceTypeId?: boolean
  }

  export type ServiceSubtypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
    services?: boolean | ServiceSubtype$servicesArgs<ExtArgs>
    _count?: boolean | ServiceSubtypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceSubtypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceSubtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceSubtype"
    objects: {
      serviceType: Prisma.$ServiceTypePayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serviceTypeId: string
    }, ExtArgs["result"]["serviceSubtype"]>
    composites: {}
  }

  type ServiceSubtypeGetPayload<S extends boolean | null | undefined | ServiceSubtypeDefaultArgs> = $Result.GetResult<Prisma.$ServiceSubtypePayload, S>

  type ServiceSubtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceSubtypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceSubtypeCountAggregateInputType | true
    }

  export interface ServiceSubtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceSubtype'], meta: { name: 'ServiceSubtype' } }
    /**
     * Find zero or one ServiceSubtype that matches the filter.
     * @param {ServiceSubtypeFindUniqueArgs} args - Arguments to find a ServiceSubtype
     * @example
     * // Get one ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceSubtypeFindUniqueArgs>(args: SelectSubset<T, ServiceSubtypeFindUniqueArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceSubtype that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceSubtypeFindUniqueOrThrowArgs} args - Arguments to find a ServiceSubtype
     * @example
     * // Get one ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceSubtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceSubtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceSubtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeFindFirstArgs} args - Arguments to find a ServiceSubtype
     * @example
     * // Get one ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceSubtypeFindFirstArgs>(args?: SelectSubset<T, ServiceSubtypeFindFirstArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceSubtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeFindFirstOrThrowArgs} args - Arguments to find a ServiceSubtype
     * @example
     * // Get one ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceSubtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceSubtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceSubtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceSubtypes
     * const serviceSubtypes = await prisma.serviceSubtype.findMany()
     * 
     * // Get first 10 ServiceSubtypes
     * const serviceSubtypes = await prisma.serviceSubtype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceSubtypeWithIdOnly = await prisma.serviceSubtype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceSubtypeFindManyArgs>(args?: SelectSubset<T, ServiceSubtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceSubtype.
     * @param {ServiceSubtypeCreateArgs} args - Arguments to create a ServiceSubtype.
     * @example
     * // Create one ServiceSubtype
     * const ServiceSubtype = await prisma.serviceSubtype.create({
     *   data: {
     *     // ... data to create a ServiceSubtype
     *   }
     * })
     * 
     */
    create<T extends ServiceSubtypeCreateArgs>(args: SelectSubset<T, ServiceSubtypeCreateArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceSubtypes.
     * @param {ServiceSubtypeCreateManyArgs} args - Arguments to create many ServiceSubtypes.
     * @example
     * // Create many ServiceSubtypes
     * const serviceSubtype = await prisma.serviceSubtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceSubtypeCreateManyArgs>(args?: SelectSubset<T, ServiceSubtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceSubtypes and returns the data saved in the database.
     * @param {ServiceSubtypeCreateManyAndReturnArgs} args - Arguments to create many ServiceSubtypes.
     * @example
     * // Create many ServiceSubtypes
     * const serviceSubtype = await prisma.serviceSubtype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceSubtypes and only return the `id`
     * const serviceSubtypeWithIdOnly = await prisma.serviceSubtype.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceSubtypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceSubtypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceSubtype.
     * @param {ServiceSubtypeDeleteArgs} args - Arguments to delete one ServiceSubtype.
     * @example
     * // Delete one ServiceSubtype
     * const ServiceSubtype = await prisma.serviceSubtype.delete({
     *   where: {
     *     // ... filter to delete one ServiceSubtype
     *   }
     * })
     * 
     */
    delete<T extends ServiceSubtypeDeleteArgs>(args: SelectSubset<T, ServiceSubtypeDeleteArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceSubtype.
     * @param {ServiceSubtypeUpdateArgs} args - Arguments to update one ServiceSubtype.
     * @example
     * // Update one ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceSubtypeUpdateArgs>(args: SelectSubset<T, ServiceSubtypeUpdateArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceSubtypes.
     * @param {ServiceSubtypeDeleteManyArgs} args - Arguments to filter ServiceSubtypes to delete.
     * @example
     * // Delete a few ServiceSubtypes
     * const { count } = await prisma.serviceSubtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceSubtypeDeleteManyArgs>(args?: SelectSubset<T, ServiceSubtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceSubtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceSubtypes
     * const serviceSubtype = await prisma.serviceSubtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceSubtypeUpdateManyArgs>(args: SelectSubset<T, ServiceSubtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceSubtype.
     * @param {ServiceSubtypeUpsertArgs} args - Arguments to update or create a ServiceSubtype.
     * @example
     * // Update or create a ServiceSubtype
     * const serviceSubtype = await prisma.serviceSubtype.upsert({
     *   create: {
     *     // ... data to create a ServiceSubtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceSubtype we want to update
     *   }
     * })
     */
    upsert<T extends ServiceSubtypeUpsertArgs>(args: SelectSubset<T, ServiceSubtypeUpsertArgs<ExtArgs>>): Prisma__ServiceSubtypeClient<$Result.GetResult<Prisma.$ServiceSubtypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceSubtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeCountArgs} args - Arguments to filter ServiceSubtypes to count.
     * @example
     * // Count the number of ServiceSubtypes
     * const count = await prisma.serviceSubtype.count({
     *   where: {
     *     // ... the filter for the ServiceSubtypes we want to count
     *   }
     * })
    **/
    count<T extends ServiceSubtypeCountArgs>(
      args?: Subset<T, ServiceSubtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceSubtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceSubtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceSubtypeAggregateArgs>(args: Subset<T, ServiceSubtypeAggregateArgs>): Prisma.PrismaPromise<GetServiceSubtypeAggregateType<T>>

    /**
     * Group by ServiceSubtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSubtypeGroupByArgs} args - Group by arguments.
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
      T extends ServiceSubtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceSubtypeGroupByArgs['orderBy'] }
        : { orderBy?: ServiceSubtypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceSubtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceSubtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceSubtype model
   */
  readonly fields: ServiceSubtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceSubtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceSubtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceType<T extends ServiceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceTypeDefaultArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    services<T extends ServiceSubtype$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceSubtype$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ServiceSubtype model
   */ 
  interface ServiceSubtypeFieldRefs {
    readonly id: FieldRef<"ServiceSubtype", 'String'>
    readonly name: FieldRef<"ServiceSubtype", 'String'>
    readonly serviceTypeId: FieldRef<"ServiceSubtype", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceSubtype findUnique
   */
  export type ServiceSubtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSubtype to fetch.
     */
    where: ServiceSubtypeWhereUniqueInput
  }

  /**
   * ServiceSubtype findUniqueOrThrow
   */
  export type ServiceSubtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSubtype to fetch.
     */
    where: ServiceSubtypeWhereUniqueInput
  }

  /**
   * ServiceSubtype findFirst
   */
  export type ServiceSubtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSubtype to fetch.
     */
    where?: ServiceSubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSubtypes to fetch.
     */
    orderBy?: ServiceSubtypeOrderByWithRelationInput | ServiceSubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceSubtypes.
     */
    cursor?: ServiceSubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSubtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSubtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceSubtypes.
     */
    distinct?: ServiceSubtypeScalarFieldEnum | ServiceSubtypeScalarFieldEnum[]
  }

  /**
   * ServiceSubtype findFirstOrThrow
   */
  export type ServiceSubtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSubtype to fetch.
     */
    where?: ServiceSubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSubtypes to fetch.
     */
    orderBy?: ServiceSubtypeOrderByWithRelationInput | ServiceSubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceSubtypes.
     */
    cursor?: ServiceSubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSubtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSubtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceSubtypes.
     */
    distinct?: ServiceSubtypeScalarFieldEnum | ServiceSubtypeScalarFieldEnum[]
  }

  /**
   * ServiceSubtype findMany
   */
  export type ServiceSubtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSubtypes to fetch.
     */
    where?: ServiceSubtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSubtypes to fetch.
     */
    orderBy?: ServiceSubtypeOrderByWithRelationInput | ServiceSubtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceSubtypes.
     */
    cursor?: ServiceSubtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSubtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSubtypes.
     */
    skip?: number
    distinct?: ServiceSubtypeScalarFieldEnum | ServiceSubtypeScalarFieldEnum[]
  }

  /**
   * ServiceSubtype create
   */
  export type ServiceSubtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceSubtype.
     */
    data: XOR<ServiceSubtypeCreateInput, ServiceSubtypeUncheckedCreateInput>
  }

  /**
   * ServiceSubtype createMany
   */
  export type ServiceSubtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceSubtypes.
     */
    data: ServiceSubtypeCreateManyInput | ServiceSubtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceSubtype createManyAndReturn
   */
  export type ServiceSubtypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceSubtypes.
     */
    data: ServiceSubtypeCreateManyInput | ServiceSubtypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceSubtype update
   */
  export type ServiceSubtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceSubtype.
     */
    data: XOR<ServiceSubtypeUpdateInput, ServiceSubtypeUncheckedUpdateInput>
    /**
     * Choose, which ServiceSubtype to update.
     */
    where: ServiceSubtypeWhereUniqueInput
  }

  /**
   * ServiceSubtype updateMany
   */
  export type ServiceSubtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceSubtypes.
     */
    data: XOR<ServiceSubtypeUpdateManyMutationInput, ServiceSubtypeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceSubtypes to update
     */
    where?: ServiceSubtypeWhereInput
  }

  /**
   * ServiceSubtype upsert
   */
  export type ServiceSubtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceSubtype to update in case it exists.
     */
    where: ServiceSubtypeWhereUniqueInput
    /**
     * In case the ServiceSubtype found by the `where` argument doesn't exist, create a new ServiceSubtype with this data.
     */
    create: XOR<ServiceSubtypeCreateInput, ServiceSubtypeUncheckedCreateInput>
    /**
     * In case the ServiceSubtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceSubtypeUpdateInput, ServiceSubtypeUncheckedUpdateInput>
  }

  /**
   * ServiceSubtype delete
   */
  export type ServiceSubtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
    /**
     * Filter which ServiceSubtype to delete.
     */
    where: ServiceSubtypeWhereUniqueInput
  }

  /**
   * ServiceSubtype deleteMany
   */
  export type ServiceSubtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceSubtypes to delete
     */
    where?: ServiceSubtypeWhereInput
  }

  /**
   * ServiceSubtype.services
   */
  export type ServiceSubtype$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ServiceSubtype without action
   */
  export type ServiceSubtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSubtype
     */
    select?: ServiceSubtypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSubtypeInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    typeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    typeId: string
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | ProviderTypeDefaultArgs<ExtArgs>
    pricingPlans?: boolean | Provider$pricingPlansArgs<ExtArgs>
    plans?: boolean | Provider$plansArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | ProviderTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | ProviderTypeDefaultArgs<ExtArgs>
    pricingPlans?: boolean | Provider$pricingPlansArgs<ExtArgs>
    plans?: boolean | Provider$plansArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | ProviderTypeDefaultArgs<ExtArgs>
  }

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      type: Prisma.$ProviderTypePayload<ExtArgs>
      pricingPlans: Prisma.$PricingPlanPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      typeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends ProviderTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderTypeDefaultArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pricingPlans<T extends Provider$pricingPlansArgs<ExtArgs> = {}>(args?: Subset<T, Provider$pricingPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany"> | Null>
    plans<T extends Provider$plansArgs<ExtArgs> = {}>(args?: Subset<T, Provider$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Provider model
   */ 
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly typeId: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
  }

  /**
   * Provider.pricingPlans
   */
  export type Provider$pricingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    cursor?: PricingPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * Provider.plans
   */
  export type Provider$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model ProviderType
   */

  export type AggregateProviderType = {
    _count: ProviderTypeCountAggregateOutputType | null
    _min: ProviderTypeMinAggregateOutputType | null
    _max: ProviderTypeMaxAggregateOutputType | null
  }

  export type ProviderTypeMinAggregateOutputType = {
    id: string | null
  }

  export type ProviderTypeMaxAggregateOutputType = {
    id: string | null
  }

  export type ProviderTypeCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ProviderTypeMinAggregateInputType = {
    id?: true
  }

  export type ProviderTypeMaxAggregateInputType = {
    id?: true
  }

  export type ProviderTypeCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ProviderTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderType to aggregate.
     */
    where?: ProviderTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderTypes to fetch.
     */
    orderBy?: ProviderTypeOrderByWithRelationInput | ProviderTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderTypes
    **/
    _count?: true | ProviderTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderTypeMaxAggregateInputType
  }

  export type GetProviderTypeAggregateType<T extends ProviderTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderType[P]>
      : GetScalarType<T[P], AggregateProviderType[P]>
  }




  export type ProviderTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderTypeWhereInput
    orderBy?: ProviderTypeOrderByWithAggregationInput | ProviderTypeOrderByWithAggregationInput[]
    by: ProviderTypeScalarFieldEnum[] | ProviderTypeScalarFieldEnum
    having?: ProviderTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderTypeCountAggregateInputType | true
    _min?: ProviderTypeMinAggregateInputType
    _max?: ProviderTypeMaxAggregateInputType
  }

  export type ProviderTypeGroupByOutputType = {
    id: string
    _count: ProviderTypeCountAggregateOutputType | null
    _min: ProviderTypeMinAggregateOutputType | null
    _max: ProviderTypeMaxAggregateOutputType | null
  }

  type GetProviderTypeGroupByPayload<T extends ProviderTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProviderTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providers?: boolean | ProviderType$providersArgs<ExtArgs>
    _count?: boolean | ProviderTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerType"]>

  export type ProviderTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["providerType"]>

  export type ProviderTypeSelectScalar = {
    id?: boolean
  }

  export type ProviderTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providers?: boolean | ProviderType$providersArgs<ExtArgs>
    _count?: boolean | ProviderTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderType"
    objects: {
      providers: Prisma.$ProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["providerType"]>
    composites: {}
  }

  type ProviderTypeGetPayload<S extends boolean | null | undefined | ProviderTypeDefaultArgs> = $Result.GetResult<Prisma.$ProviderTypePayload, S>

  type ProviderTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProviderTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProviderTypeCountAggregateInputType | true
    }

  export interface ProviderTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderType'], meta: { name: 'ProviderType' } }
    /**
     * Find zero or one ProviderType that matches the filter.
     * @param {ProviderTypeFindUniqueArgs} args - Arguments to find a ProviderType
     * @example
     * // Get one ProviderType
     * const providerType = await prisma.providerType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderTypeFindUniqueArgs>(args: SelectSubset<T, ProviderTypeFindUniqueArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProviderType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProviderTypeFindUniqueOrThrowArgs} args - Arguments to find a ProviderType
     * @example
     * // Get one ProviderType
     * const providerType = await prisma.providerType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProviderType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeFindFirstArgs} args - Arguments to find a ProviderType
     * @example
     * // Get one ProviderType
     * const providerType = await prisma.providerType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderTypeFindFirstArgs>(args?: SelectSubset<T, ProviderTypeFindFirstArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProviderType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeFindFirstOrThrowArgs} args - Arguments to find a ProviderType
     * @example
     * // Get one ProviderType
     * const providerType = await prisma.providerType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProviderTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderTypes
     * const providerTypes = await prisma.providerType.findMany()
     * 
     * // Get first 10 ProviderTypes
     * const providerTypes = await prisma.providerType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerTypeWithIdOnly = await prisma.providerType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderTypeFindManyArgs>(args?: SelectSubset<T, ProviderTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProviderType.
     * @param {ProviderTypeCreateArgs} args - Arguments to create a ProviderType.
     * @example
     * // Create one ProviderType
     * const ProviderType = await prisma.providerType.create({
     *   data: {
     *     // ... data to create a ProviderType
     *   }
     * })
     * 
     */
    create<T extends ProviderTypeCreateArgs>(args: SelectSubset<T, ProviderTypeCreateArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProviderTypes.
     * @param {ProviderTypeCreateManyArgs} args - Arguments to create many ProviderTypes.
     * @example
     * // Create many ProviderTypes
     * const providerType = await prisma.providerType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderTypeCreateManyArgs>(args?: SelectSubset<T, ProviderTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderTypes and returns the data saved in the database.
     * @param {ProviderTypeCreateManyAndReturnArgs} args - Arguments to create many ProviderTypes.
     * @example
     * // Create many ProviderTypes
     * const providerType = await prisma.providerType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderTypes and only return the `id`
     * const providerTypeWithIdOnly = await prisma.providerType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProviderType.
     * @param {ProviderTypeDeleteArgs} args - Arguments to delete one ProviderType.
     * @example
     * // Delete one ProviderType
     * const ProviderType = await prisma.providerType.delete({
     *   where: {
     *     // ... filter to delete one ProviderType
     *   }
     * })
     * 
     */
    delete<T extends ProviderTypeDeleteArgs>(args: SelectSubset<T, ProviderTypeDeleteArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProviderType.
     * @param {ProviderTypeUpdateArgs} args - Arguments to update one ProviderType.
     * @example
     * // Update one ProviderType
     * const providerType = await prisma.providerType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderTypeUpdateArgs>(args: SelectSubset<T, ProviderTypeUpdateArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProviderTypes.
     * @param {ProviderTypeDeleteManyArgs} args - Arguments to filter ProviderTypes to delete.
     * @example
     * // Delete a few ProviderTypes
     * const { count } = await prisma.providerType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderTypeDeleteManyArgs>(args?: SelectSubset<T, ProviderTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderTypes
     * const providerType = await prisma.providerType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderTypeUpdateManyArgs>(args: SelectSubset<T, ProviderTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderType.
     * @param {ProviderTypeUpsertArgs} args - Arguments to update or create a ProviderType.
     * @example
     * // Update or create a ProviderType
     * const providerType = await prisma.providerType.upsert({
     *   create: {
     *     // ... data to create a ProviderType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderType we want to update
     *   }
     * })
     */
    upsert<T extends ProviderTypeUpsertArgs>(args: SelectSubset<T, ProviderTypeUpsertArgs<ExtArgs>>): Prisma__ProviderTypeClient<$Result.GetResult<Prisma.$ProviderTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProviderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeCountArgs} args - Arguments to filter ProviderTypes to count.
     * @example
     * // Count the number of ProviderTypes
     * const count = await prisma.providerType.count({
     *   where: {
     *     // ... the filter for the ProviderTypes we want to count
     *   }
     * })
    **/
    count<T extends ProviderTypeCountArgs>(
      args?: Subset<T, ProviderTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderTypeAggregateArgs>(args: Subset<T, ProviderTypeAggregateArgs>): Prisma.PrismaPromise<GetProviderTypeAggregateType<T>>

    /**
     * Group by ProviderType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderTypeGroupByArgs} args - Group by arguments.
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
      T extends ProviderTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProviderTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderType model
   */
  readonly fields: ProviderTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providers<T extends ProviderType$providersArgs<ExtArgs> = {}>(args?: Subset<T, ProviderType$providersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProviderType model
   */ 
  interface ProviderTypeFieldRefs {
    readonly id: FieldRef<"ProviderType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderType findUnique
   */
  export type ProviderTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProviderType to fetch.
     */
    where: ProviderTypeWhereUniqueInput
  }

  /**
   * ProviderType findUniqueOrThrow
   */
  export type ProviderTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProviderType to fetch.
     */
    where: ProviderTypeWhereUniqueInput
  }

  /**
   * ProviderType findFirst
   */
  export type ProviderTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProviderType to fetch.
     */
    where?: ProviderTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderTypes to fetch.
     */
    orderBy?: ProviderTypeOrderByWithRelationInput | ProviderTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderTypes.
     */
    cursor?: ProviderTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderTypes.
     */
    distinct?: ProviderTypeScalarFieldEnum | ProviderTypeScalarFieldEnum[]
  }

  /**
   * ProviderType findFirstOrThrow
   */
  export type ProviderTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProviderType to fetch.
     */
    where?: ProviderTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderTypes to fetch.
     */
    orderBy?: ProviderTypeOrderByWithRelationInput | ProviderTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderTypes.
     */
    cursor?: ProviderTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderTypes.
     */
    distinct?: ProviderTypeScalarFieldEnum | ProviderTypeScalarFieldEnum[]
  }

  /**
   * ProviderType findMany
   */
  export type ProviderTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProviderTypes to fetch.
     */
    where?: ProviderTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderTypes to fetch.
     */
    orderBy?: ProviderTypeOrderByWithRelationInput | ProviderTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderTypes.
     */
    cursor?: ProviderTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderTypes.
     */
    skip?: number
    distinct?: ProviderTypeScalarFieldEnum | ProviderTypeScalarFieldEnum[]
  }

  /**
   * ProviderType create
   */
  export type ProviderTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderType.
     */
    data: XOR<ProviderTypeCreateInput, ProviderTypeUncheckedCreateInput>
  }

  /**
   * ProviderType createMany
   */
  export type ProviderTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderTypes.
     */
    data: ProviderTypeCreateManyInput | ProviderTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderType createManyAndReturn
   */
  export type ProviderTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProviderTypes.
     */
    data: ProviderTypeCreateManyInput | ProviderTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderType update
   */
  export type ProviderTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderType.
     */
    data: XOR<ProviderTypeUpdateInput, ProviderTypeUncheckedUpdateInput>
    /**
     * Choose, which ProviderType to update.
     */
    where: ProviderTypeWhereUniqueInput
  }

  /**
   * ProviderType updateMany
   */
  export type ProviderTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderTypes.
     */
    data: XOR<ProviderTypeUpdateManyMutationInput, ProviderTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProviderTypes to update
     */
    where?: ProviderTypeWhereInput
  }

  /**
   * ProviderType upsert
   */
  export type ProviderTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderType to update in case it exists.
     */
    where: ProviderTypeWhereUniqueInput
    /**
     * In case the ProviderType found by the `where` argument doesn't exist, create a new ProviderType with this data.
     */
    create: XOR<ProviderTypeCreateInput, ProviderTypeUncheckedCreateInput>
    /**
     * In case the ProviderType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderTypeUpdateInput, ProviderTypeUncheckedUpdateInput>
  }

  /**
   * ProviderType delete
   */
  export type ProviderTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
    /**
     * Filter which ProviderType to delete.
     */
    where: ProviderTypeWhereUniqueInput
  }

  /**
   * ProviderType deleteMany
   */
  export type ProviderTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderTypes to delete
     */
    where?: ProviderTypeWhereInput
  }

  /**
   * ProviderType.providers
   */
  export type ProviderType$providersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    cursor?: ProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * ProviderType without action
   */
  export type ProviderTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderType
     */
    select?: ProviderTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderTypeInclude<ExtArgs> | null
  }


  /**
   * Model PricingPlan
   */

  export type AggregatePricingPlan = {
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  export type PricingPlanAvgAggregateOutputType = {
    cost: number | null
  }

  export type PricingPlanSumAggregateOutputType = {
    cost: number | null
  }

  export type PricingPlanMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    cost: number | null
    billingUnit: $Enums.BillingUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    cost: number | null
    billingUnit: $Enums.BillingUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanCountAggregateOutputType = {
    id: number
    providerId: number
    cost: number
    billingUnit: number
    customConfig: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingPlanAvgAggregateInputType = {
    cost?: true
  }

  export type PricingPlanSumAggregateInputType = {
    cost?: true
  }

  export type PricingPlanMinAggregateInputType = {
    id?: true
    providerId?: true
    cost?: true
    billingUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanMaxAggregateInputType = {
    id?: true
    providerId?: true
    cost?: true
    billingUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanCountAggregateInputType = {
    id?: true
    providerId?: true
    cost?: true
    billingUnit?: true
    customConfig?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlan to aggregate.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingPlans
    **/
    _count?: true | PricingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingPlanMaxAggregateInputType
  }

  export type GetPricingPlanAggregateType<T extends PricingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingPlan[P]>
      : GetScalarType<T[P], AggregatePricingPlan[P]>
  }




  export type PricingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithAggregationInput | PricingPlanOrderByWithAggregationInput[]
    by: PricingPlanScalarFieldEnum[] | PricingPlanScalarFieldEnum
    having?: PricingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingPlanCountAggregateInputType | true
    _avg?: PricingPlanAvgAggregateInputType
    _sum?: PricingPlanSumAggregateInputType
    _min?: PricingPlanMinAggregateInputType
    _max?: PricingPlanMaxAggregateInputType
  }

  export type PricingPlanGroupByOutputType = {
    id: string
    providerId: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  type GetPricingPlanGroupByPayload<T extends PricingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
        }
      >
    >


  export type PricingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    cost?: boolean
    billingUnit?: boolean
    customConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    plans?: boolean | PricingPlan$plansArgs<ExtArgs>
    _count?: boolean | PricingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    cost?: boolean
    billingUnit?: boolean
    customConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectScalar = {
    id?: boolean
    providerId?: boolean
    cost?: boolean
    billingUnit?: boolean
    customConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    plans?: boolean | PricingPlan$plansArgs<ExtArgs>
    _count?: boolean | PricingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PricingPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $PricingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingPlan"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      cost: number
      billingUnit: $Enums.BillingUnit
      customConfig: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingPlan"]>
    composites: {}
  }

  type PricingPlanGetPayload<S extends boolean | null | undefined | PricingPlanDefaultArgs> = $Result.GetResult<Prisma.$PricingPlanPayload, S>

  type PricingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PricingPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PricingPlanCountAggregateInputType | true
    }

  export interface PricingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingPlan'], meta: { name: 'PricingPlan' } }
    /**
     * Find zero or one PricingPlan that matches the filter.
     * @param {PricingPlanFindUniqueArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingPlanFindUniqueArgs>(args: SelectSubset<T, PricingPlanFindUniqueArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PricingPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PricingPlanFindUniqueOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PricingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingPlanFindFirstArgs>(args?: SelectSubset<T, PricingPlanFindFirstArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PricingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PricingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany()
     * 
     * // Get first 10 PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingPlanFindManyArgs>(args?: SelectSubset<T, PricingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PricingPlan.
     * @param {PricingPlanCreateArgs} args - Arguments to create a PricingPlan.
     * @example
     * // Create one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.create({
     *   data: {
     *     // ... data to create a PricingPlan
     *   }
     * })
     * 
     */
    create<T extends PricingPlanCreateArgs>(args: SelectSubset<T, PricingPlanCreateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PricingPlans.
     * @param {PricingPlanCreateManyArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingPlanCreateManyArgs>(args?: SelectSubset<T, PricingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingPlans and returns the data saved in the database.
     * @param {PricingPlanCreateManyAndReturnArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingPlans and only return the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PricingPlan.
     * @param {PricingPlanDeleteArgs} args - Arguments to delete one PricingPlan.
     * @example
     * // Delete one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.delete({
     *   where: {
     *     // ... filter to delete one PricingPlan
     *   }
     * })
     * 
     */
    delete<T extends PricingPlanDeleteArgs>(args: SelectSubset<T, PricingPlanDeleteArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PricingPlan.
     * @param {PricingPlanUpdateArgs} args - Arguments to update one PricingPlan.
     * @example
     * // Update one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingPlanUpdateArgs>(args: SelectSubset<T, PricingPlanUpdateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PricingPlans.
     * @param {PricingPlanDeleteManyArgs} args - Arguments to filter PricingPlans to delete.
     * @example
     * // Delete a few PricingPlans
     * const { count } = await prisma.pricingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingPlanDeleteManyArgs>(args?: SelectSubset<T, PricingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingPlanUpdateManyArgs>(args: SelectSubset<T, PricingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingPlan.
     * @param {PricingPlanUpsertArgs} args - Arguments to update or create a PricingPlan.
     * @example
     * // Update or create a PricingPlan
     * const pricingPlan = await prisma.pricingPlan.upsert({
     *   create: {
     *     // ... data to create a PricingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingPlan we want to update
     *   }
     * })
     */
    upsert<T extends PricingPlanUpsertArgs>(args: SelectSubset<T, PricingPlanUpsertArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanCountArgs} args - Arguments to filter PricingPlans to count.
     * @example
     * // Count the number of PricingPlans
     * const count = await prisma.pricingPlan.count({
     *   where: {
     *     // ... the filter for the PricingPlans we want to count
     *   }
     * })
    **/
    count<T extends PricingPlanCountArgs>(
      args?: Subset<T, PricingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingPlanAggregateArgs>(args: Subset<T, PricingPlanAggregateArgs>): Prisma.PrismaPromise<GetPricingPlanAggregateType<T>>

    /**
     * Group by PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanGroupByArgs} args - Group by arguments.
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
      T extends PricingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingPlanGroupByArgs['orderBy'] }
        : { orderBy?: PricingPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingPlan model
   */
  readonly fields: PricingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plans<T extends PricingPlan$plansArgs<ExtArgs> = {}>(args?: Subset<T, PricingPlan$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PricingPlan model
   */ 
  interface PricingPlanFieldRefs {
    readonly id: FieldRef<"PricingPlan", 'String'>
    readonly providerId: FieldRef<"PricingPlan", 'String'>
    readonly cost: FieldRef<"PricingPlan", 'Float'>
    readonly billingUnit: FieldRef<"PricingPlan", 'BillingUnit'>
    readonly customConfig: FieldRef<"PricingPlan", 'Json'>
    readonly createdAt: FieldRef<"PricingPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingPlan findUnique
   */
  export type PricingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findUniqueOrThrow
   */
  export type PricingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findFirst
   */
  export type PricingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findFirstOrThrow
   */
  export type PricingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findMany
   */
  export type PricingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlans to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan create
   */
  export type PricingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingPlan.
     */
    data: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
  }

  /**
   * PricingPlan createMany
   */
  export type PricingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPlan createManyAndReturn
   */
  export type PricingPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingPlan update
   */
  export type PricingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingPlan.
     */
    data: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
    /**
     * Choose, which PricingPlan to update.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan updateMany
   */
  export type PricingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
  }

  /**
   * PricingPlan upsert
   */
  export type PricingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingPlan to update in case it exists.
     */
    where: PricingPlanWhereUniqueInput
    /**
     * In case the PricingPlan found by the `where` argument doesn't exist, create a new PricingPlan with this data.
     */
    create: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
    /**
     * In case the PricingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
  }

  /**
   * PricingPlan delete
   */
  export type PricingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter which PricingPlan to delete.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan deleteMany
   */
  export type PricingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlans to delete
     */
    where?: PricingPlanWhereInput
  }

  /**
   * PricingPlan.plans
   */
  export type PricingPlan$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * PricingPlan without action
   */
  export type PricingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
  }


  /**
   * Model Environment
   */

  export type AggregateEnvironment = {
    _count: EnvironmentCountAggregateOutputType | null
    _min: EnvironmentMinAggregateOutputType | null
    _max: EnvironmentMaxAggregateOutputType | null
  }

  export type EnvironmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Environment to aggregate.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Environments
    **/
    _count?: true | EnvironmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentMaxAggregateInputType
  }

  export type GetEnvironmentAggregateType<T extends EnvironmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironment[P]>
      : GetScalarType<T[P], AggregateEnvironment[P]>
  }




  export type EnvironmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentWhereInput
    orderBy?: EnvironmentOrderByWithAggregationInput | EnvironmentOrderByWithAggregationInput[]
    by: EnvironmentScalarFieldEnum[] | EnvironmentScalarFieldEnum
    having?: EnvironmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentCountAggregateInputType | true
    _min?: EnvironmentMinAggregateInputType
    _max?: EnvironmentMaxAggregateInputType
  }

  export type EnvironmentGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentCountAggregateOutputType | null
    _min: EnvironmentMinAggregateOutputType | null
    _max: EnvironmentMaxAggregateOutputType | null
  }

  type GetEnvironmentGroupByPayload<T extends EnvironmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployments?: boolean | Environment$deploymentsArgs<ExtArgs>
    _count?: boolean | EnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environment"]>

  export type EnvironmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["environment"]>

  export type EnvironmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | Environment$deploymentsArgs<ExtArgs>
    _count?: boolean | EnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnvironmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnvironmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Environment"
    objects: {
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environment"]>
    composites: {}
  }

  type EnvironmentGetPayload<S extends boolean | null | undefined | EnvironmentDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentPayload, S>

  type EnvironmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnvironmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnvironmentCountAggregateInputType | true
    }

  export interface EnvironmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Environment'], meta: { name: 'Environment' } }
    /**
     * Find zero or one Environment that matches the filter.
     * @param {EnvironmentFindUniqueArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentFindUniqueArgs>(args: SelectSubset<T, EnvironmentFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Environment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnvironmentFindUniqueOrThrowArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Environment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindFirstArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentFindFirstArgs>(args?: SelectSubset<T, EnvironmentFindFirstArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Environment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindFirstOrThrowArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Environments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Environments
     * const environments = await prisma.environment.findMany()
     * 
     * // Get first 10 Environments
     * const environments = await prisma.environment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentWithIdOnly = await prisma.environment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentFindManyArgs>(args?: SelectSubset<T, EnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Environment.
     * @param {EnvironmentCreateArgs} args - Arguments to create a Environment.
     * @example
     * // Create one Environment
     * const Environment = await prisma.environment.create({
     *   data: {
     *     // ... data to create a Environment
     *   }
     * })
     * 
     */
    create<T extends EnvironmentCreateArgs>(args: SelectSubset<T, EnvironmentCreateArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Environments.
     * @param {EnvironmentCreateManyArgs} args - Arguments to create many Environments.
     * @example
     * // Create many Environments
     * const environment = await prisma.environment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentCreateManyArgs>(args?: SelectSubset<T, EnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Environments and returns the data saved in the database.
     * @param {EnvironmentCreateManyAndReturnArgs} args - Arguments to create many Environments.
     * @example
     * // Create many Environments
     * const environment = await prisma.environment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Environments and only return the `id`
     * const environmentWithIdOnly = await prisma.environment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Environment.
     * @param {EnvironmentDeleteArgs} args - Arguments to delete one Environment.
     * @example
     * // Delete one Environment
     * const Environment = await prisma.environment.delete({
     *   where: {
     *     // ... filter to delete one Environment
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentDeleteArgs>(args: SelectSubset<T, EnvironmentDeleteArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Environment.
     * @param {EnvironmentUpdateArgs} args - Arguments to update one Environment.
     * @example
     * // Update one Environment
     * const environment = await prisma.environment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentUpdateArgs>(args: SelectSubset<T, EnvironmentUpdateArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Environments.
     * @param {EnvironmentDeleteManyArgs} args - Arguments to filter Environments to delete.
     * @example
     * // Delete a few Environments
     * const { count } = await prisma.environment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentDeleteManyArgs>(args?: SelectSubset<T, EnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Environments
     * const environment = await prisma.environment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentUpdateManyArgs>(args: SelectSubset<T, EnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Environment.
     * @param {EnvironmentUpsertArgs} args - Arguments to update or create a Environment.
     * @example
     * // Update or create a Environment
     * const environment = await prisma.environment.upsert({
     *   create: {
     *     // ... data to create a Environment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Environment we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentUpsertArgs>(args: SelectSubset<T, EnvironmentUpsertArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentCountArgs} args - Arguments to filter Environments to count.
     * @example
     * // Count the number of Environments
     * const count = await prisma.environment.count({
     *   where: {
     *     // ... the filter for the Environments we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentCountArgs>(
      args?: Subset<T, EnvironmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Environment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnvironmentAggregateArgs>(args: Subset<T, EnvironmentAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentAggregateType<T>>

    /**
     * Group by Environment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentGroupByArgs} args - Group by arguments.
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
      T extends EnvironmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Environment model
   */
  readonly fields: EnvironmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Environment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deployments<T extends Environment$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Environment$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Environment model
   */ 
  interface EnvironmentFieldRefs {
    readonly id: FieldRef<"Environment", 'String'>
    readonly name: FieldRef<"Environment", 'String'>
    readonly description: FieldRef<"Environment", 'String'>
    readonly createdAt: FieldRef<"Environment", 'DateTime'>
    readonly updatedAt: FieldRef<"Environment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Environment findUnique
   */
  export type EnvironmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment findUniqueOrThrow
   */
  export type EnvironmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment findFirst
   */
  export type EnvironmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Environments.
     */
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment findFirstOrThrow
   */
  export type EnvironmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Environments.
     */
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment findMany
   */
  export type EnvironmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environments to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment create
   */
  export type EnvironmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Environment.
     */
    data: XOR<EnvironmentCreateInput, EnvironmentUncheckedCreateInput>
  }

  /**
   * Environment createMany
   */
  export type EnvironmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Environments.
     */
    data: EnvironmentCreateManyInput | EnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Environment createManyAndReturn
   */
  export type EnvironmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Environments.
     */
    data: EnvironmentCreateManyInput | EnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Environment update
   */
  export type EnvironmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Environment.
     */
    data: XOR<EnvironmentUpdateInput, EnvironmentUncheckedUpdateInput>
    /**
     * Choose, which Environment to update.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment updateMany
   */
  export type EnvironmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Environments.
     */
    data: XOR<EnvironmentUpdateManyMutationInput, EnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which Environments to update
     */
    where?: EnvironmentWhereInput
  }

  /**
   * Environment upsert
   */
  export type EnvironmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Environment to update in case it exists.
     */
    where: EnvironmentWhereUniqueInput
    /**
     * In case the Environment found by the `where` argument doesn't exist, create a new Environment with this data.
     */
    create: XOR<EnvironmentCreateInput, EnvironmentUncheckedCreateInput>
    /**
     * In case the Environment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentUpdateInput, EnvironmentUncheckedUpdateInput>
  }

  /**
   * Environment delete
   */
  export type EnvironmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter which Environment to delete.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment deleteMany
   */
  export type EnvironmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Environments to delete
     */
    where?: EnvironmentWhereInput
  }

  /**
   * Environment.deployments
   */
  export type Environment$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Environment without action
   */
  export type EnvironmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    environmentId: string | null
    serviceId: string | null
    planId: string | null
    status: $Enums.DeploymentStatus | null
    monitoringConfigId: string | null
    appVersion: string | null
    dbVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    environmentId: string | null
    serviceId: string | null
    planId: string | null
    status: $Enums.DeploymentStatus | null
    monitoringConfigId: string | null
    appVersion: string | null
    dbVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    environmentId: number
    serviceId: number
    planId: number
    status: number
    monitoringConfigId: number
    telemetryDashboards: number
    appVersion: number
    microServiceVersions: number
    dbVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeploymentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    environmentId?: true
    serviceId?: true
    planId?: true
    status?: true
    monitoringConfigId?: true
    appVersion?: true
    dbVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    environmentId?: true
    serviceId?: true
    planId?: true
    status?: true
    monitoringConfigId?: true
    appVersion?: true
    dbVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    environmentId?: true
    serviceId?: true
    planId?: true
    status?: true
    monitoringConfigId?: true
    telemetryDashboards?: true
    appVersion?: true
    microServiceVersions?: true
    dbVersion?: true
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
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId: string | null
    telemetryDashboards: JsonValue
    appVersion: string
    microServiceVersions: string[]
    dbVersion: string
    createdAt: Date
    updatedAt: Date
    _count: DeploymentCountAggregateOutputType | null
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
    name?: boolean
    description?: boolean
    environmentId?: boolean
    serviceId?: boolean
    planId?: boolean
    status?: boolean
    monitoringConfigId?: boolean
    telemetryDashboards?: boolean
    appVersion?: boolean
    microServiceVersions?: boolean
    dbVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    monitoringConfig?: boolean | Deployment$monitoringConfigArgs<ExtArgs>
    microServices?: boolean | Deployment$microServicesArgs<ExtArgs>
    _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    environmentId?: boolean
    serviceId?: boolean
    planId?: boolean
    status?: boolean
    monitoringConfigId?: boolean
    telemetryDashboards?: boolean
    appVersion?: boolean
    microServiceVersions?: boolean
    dbVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    monitoringConfig?: boolean | Deployment$monitoringConfigArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    environmentId?: boolean
    serviceId?: boolean
    planId?: boolean
    status?: boolean
    monitoringConfigId?: boolean
    telemetryDashboards?: boolean
    appVersion?: boolean
    microServiceVersions?: boolean
    dbVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    monitoringConfig?: boolean | Deployment$monitoringConfigArgs<ExtArgs>
    microServices?: boolean | Deployment$microServicesArgs<ExtArgs>
    _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    monitoringConfig?: boolean | Deployment$monitoringConfigArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      environment: Prisma.$EnvironmentPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      monitoringConfig: Prisma.$MonitoringConfigPayload<ExtArgs> | null
      microServices: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      environmentId: string
      serviceId: string
      planId: string
      status: $Enums.DeploymentStatus
      monitoringConfigId: string | null
      telemetryDashboards: Prisma.JsonValue
      appVersion: string
      microServiceVersions: string[]
      dbVersion: string
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
    environment<T extends EnvironmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnvironmentDefaultArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    monitoringConfig<T extends Deployment$monitoringConfigArgs<ExtArgs> = {}>(args?: Subset<T, Deployment$monitoringConfigArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    microServices<T extends Deployment$microServicesArgs<ExtArgs> = {}>(args?: Subset<T, Deployment$microServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"Deployment", 'String'>
    readonly name: FieldRef<"Deployment", 'String'>
    readonly description: FieldRef<"Deployment", 'String'>
    readonly environmentId: FieldRef<"Deployment", 'String'>
    readonly serviceId: FieldRef<"Deployment", 'String'>
    readonly planId: FieldRef<"Deployment", 'String'>
    readonly status: FieldRef<"Deployment", 'DeploymentStatus'>
    readonly monitoringConfigId: FieldRef<"Deployment", 'String'>
    readonly telemetryDashboards: FieldRef<"Deployment", 'Json'>
    readonly appVersion: FieldRef<"Deployment", 'String'>
    readonly microServiceVersions: FieldRef<"Deployment", 'String[]'>
    readonly dbVersion: FieldRef<"Deployment", 'String'>
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
   * Deployment.monitoringConfig
   */
  export type Deployment$monitoringConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    where?: MonitoringConfigWhereInput
  }

  /**
   * Deployment.microServices
   */
  export type Deployment$microServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    pricingPlanId: string | null
    monitoringConfigId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    pricingPlanId: string | null
    monitoringConfigId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    providerId: number
    pricingPlanId: number
    deploymentConfig: number
    monitoringConfigId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    pricingPlanId?: true
    monitoringConfigId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    pricingPlanId?: true
    monitoringConfigId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    pricingPlanId?: true
    deploymentConfig?: true
    monitoringConfigId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    providerId: string
    pricingPlanId: string | null
    deploymentConfig: JsonValue
    monitoringConfigId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    pricingPlanId?: boolean
    deploymentConfig?: boolean
    monitoringConfigId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    pricingPlan?: boolean | Plan$pricingPlanArgs<ExtArgs>
    monitoringConfig?: boolean | Plan$monitoringConfigArgs<ExtArgs>
    deployments?: boolean | Plan$deploymentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    pricingPlanId?: boolean
    deploymentConfig?: boolean
    monitoringConfigId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    pricingPlan?: boolean | Plan$pricingPlanArgs<ExtArgs>
    monitoringConfig?: boolean | Plan$monitoringConfigArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    providerId?: boolean
    pricingPlanId?: boolean
    deploymentConfig?: boolean
    monitoringConfigId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    pricingPlan?: boolean | Plan$pricingPlanArgs<ExtArgs>
    monitoringConfig?: boolean | Plan$monitoringConfigArgs<ExtArgs>
    deployments?: boolean | Plan$deploymentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    pricingPlan?: boolean | Plan$pricingPlanArgs<ExtArgs>
    monitoringConfig?: boolean | Plan$monitoringConfigArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      pricingPlan: Prisma.$PricingPlanPayload<ExtArgs> | null
      monitoringConfig: Prisma.$MonitoringConfigPayload<ExtArgs> | null
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      providerId: string
      pricingPlanId: string | null
      deploymentConfig: Prisma.JsonValue
      monitoringConfigId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pricingPlan<T extends Plan$pricingPlanArgs<ExtArgs> = {}>(args?: Subset<T, Plan$pricingPlanArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    monitoringConfig<T extends Plan$monitoringConfigArgs<ExtArgs> = {}>(args?: Subset<T, Plan$monitoringConfigArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    deployments<T extends Plan$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly providerId: FieldRef<"Plan", 'String'>
    readonly pricingPlanId: FieldRef<"Plan", 'String'>
    readonly deploymentConfig: FieldRef<"Plan", 'Json'>
    readonly monitoringConfigId: FieldRef<"Plan", 'String'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.pricingPlan
   */
  export type Plan$pricingPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    where?: PricingPlanWhereInput
  }

  /**
   * Plan.monitoringConfig
   */
  export type Plan$monitoringConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    where?: MonitoringConfigWhereInput
  }

  /**
   * Plan.deployments
   */
  export type Plan$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model MonitoringConfig
   */

  export type AggregateMonitoringConfig = {
    _count: MonitoringConfigCountAggregateOutputType | null
    _min: MonitoringConfigMinAggregateOutputType | null
    _max: MonitoringConfigMaxAggregateOutputType | null
  }

  export type MonitoringConfigMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitoringConfigMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitoringConfigCountAggregateOutputType = {
    id: number
    logs: number
    traces: number
    metrics: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonitoringConfigMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitoringConfigMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitoringConfigCountAggregateInputType = {
    id?: true
    logs?: true
    traces?: true
    metrics?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonitoringConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringConfig to aggregate.
     */
    where?: MonitoringConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringConfigs to fetch.
     */
    orderBy?: MonitoringConfigOrderByWithRelationInput | MonitoringConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonitoringConfigs
    **/
    _count?: true | MonitoringConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringConfigMaxAggregateInputType
  }

  export type GetMonitoringConfigAggregateType<T extends MonitoringConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoringConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoringConfig[P]>
      : GetScalarType<T[P], AggregateMonitoringConfig[P]>
  }




  export type MonitoringConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringConfigWhereInput
    orderBy?: MonitoringConfigOrderByWithAggregationInput | MonitoringConfigOrderByWithAggregationInput[]
    by: MonitoringConfigScalarFieldEnum[] | MonitoringConfigScalarFieldEnum
    having?: MonitoringConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringConfigCountAggregateInputType | true
    _min?: MonitoringConfigMinAggregateInputType
    _max?: MonitoringConfigMaxAggregateInputType
  }

  export type MonitoringConfigGroupByOutputType = {
    id: string
    logs: JsonValue
    traces: JsonValue
    metrics: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: MonitoringConfigCountAggregateOutputType | null
    _min: MonitoringConfigMinAggregateOutputType | null
    _max: MonitoringConfigMaxAggregateOutputType | null
  }

  type GetMonitoringConfigGroupByPayload<T extends MonitoringConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringConfigGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringConfigGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logs?: boolean
    traces?: boolean
    metrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployments?: boolean | MonitoringConfig$deploymentsArgs<ExtArgs>
    plans?: boolean | MonitoringConfig$plansArgs<ExtArgs>
    _count?: boolean | MonitoringConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringConfig"]>

  export type MonitoringConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logs?: boolean
    traces?: boolean
    metrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monitoringConfig"]>

  export type MonitoringConfigSelectScalar = {
    id?: boolean
    logs?: boolean
    traces?: boolean
    metrics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonitoringConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | MonitoringConfig$deploymentsArgs<ExtArgs>
    plans?: boolean | MonitoringConfig$plansArgs<ExtArgs>
    _count?: boolean | MonitoringConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonitoringConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MonitoringConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonitoringConfig"
    objects: {
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logs: Prisma.JsonValue
      traces: Prisma.JsonValue
      metrics: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monitoringConfig"]>
    composites: {}
  }

  type MonitoringConfigGetPayload<S extends boolean | null | undefined | MonitoringConfigDefaultArgs> = $Result.GetResult<Prisma.$MonitoringConfigPayload, S>

  type MonitoringConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonitoringConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonitoringConfigCountAggregateInputType | true
    }

  export interface MonitoringConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonitoringConfig'], meta: { name: 'MonitoringConfig' } }
    /**
     * Find zero or one MonitoringConfig that matches the filter.
     * @param {MonitoringConfigFindUniqueArgs} args - Arguments to find a MonitoringConfig
     * @example
     * // Get one MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringConfigFindUniqueArgs>(args: SelectSubset<T, MonitoringConfigFindUniqueArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonitoringConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonitoringConfigFindUniqueOrThrowArgs} args - Arguments to find a MonitoringConfig
     * @example
     * // Get one MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonitoringConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigFindFirstArgs} args - Arguments to find a MonitoringConfig
     * @example
     * // Get one MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringConfigFindFirstArgs>(args?: SelectSubset<T, MonitoringConfigFindFirstArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonitoringConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigFindFirstOrThrowArgs} args - Arguments to find a MonitoringConfig
     * @example
     * // Get one MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonitoringConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringConfigs
     * const monitoringConfigs = await prisma.monitoringConfig.findMany()
     * 
     * // Get first 10 MonitoringConfigs
     * const monitoringConfigs = await prisma.monitoringConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringConfigWithIdOnly = await prisma.monitoringConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringConfigFindManyArgs>(args?: SelectSubset<T, MonitoringConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonitoringConfig.
     * @param {MonitoringConfigCreateArgs} args - Arguments to create a MonitoringConfig.
     * @example
     * // Create one MonitoringConfig
     * const MonitoringConfig = await prisma.monitoringConfig.create({
     *   data: {
     *     // ... data to create a MonitoringConfig
     *   }
     * })
     * 
     */
    create<T extends MonitoringConfigCreateArgs>(args: SelectSubset<T, MonitoringConfigCreateArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonitoringConfigs.
     * @param {MonitoringConfigCreateManyArgs} args - Arguments to create many MonitoringConfigs.
     * @example
     * // Create many MonitoringConfigs
     * const monitoringConfig = await prisma.monitoringConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringConfigCreateManyArgs>(args?: SelectSubset<T, MonitoringConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonitoringConfigs and returns the data saved in the database.
     * @param {MonitoringConfigCreateManyAndReturnArgs} args - Arguments to create many MonitoringConfigs.
     * @example
     * // Create many MonitoringConfigs
     * const monitoringConfig = await prisma.monitoringConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonitoringConfigs and only return the `id`
     * const monitoringConfigWithIdOnly = await prisma.monitoringConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonitoringConfig.
     * @param {MonitoringConfigDeleteArgs} args - Arguments to delete one MonitoringConfig.
     * @example
     * // Delete one MonitoringConfig
     * const MonitoringConfig = await prisma.monitoringConfig.delete({
     *   where: {
     *     // ... filter to delete one MonitoringConfig
     *   }
     * })
     * 
     */
    delete<T extends MonitoringConfigDeleteArgs>(args: SelectSubset<T, MonitoringConfigDeleteArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonitoringConfig.
     * @param {MonitoringConfigUpdateArgs} args - Arguments to update one MonitoringConfig.
     * @example
     * // Update one MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringConfigUpdateArgs>(args: SelectSubset<T, MonitoringConfigUpdateArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonitoringConfigs.
     * @param {MonitoringConfigDeleteManyArgs} args - Arguments to filter MonitoringConfigs to delete.
     * @example
     * // Delete a few MonitoringConfigs
     * const { count } = await prisma.monitoringConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringConfigDeleteManyArgs>(args?: SelectSubset<T, MonitoringConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringConfigs
     * const monitoringConfig = await prisma.monitoringConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringConfigUpdateManyArgs>(args: SelectSubset<T, MonitoringConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonitoringConfig.
     * @param {MonitoringConfigUpsertArgs} args - Arguments to update or create a MonitoringConfig.
     * @example
     * // Update or create a MonitoringConfig
     * const monitoringConfig = await prisma.monitoringConfig.upsert({
     *   create: {
     *     // ... data to create a MonitoringConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringConfig we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringConfigUpsertArgs>(args: SelectSubset<T, MonitoringConfigUpsertArgs<ExtArgs>>): Prisma__MonitoringConfigClient<$Result.GetResult<Prisma.$MonitoringConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonitoringConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigCountArgs} args - Arguments to filter MonitoringConfigs to count.
     * @example
     * // Count the number of MonitoringConfigs
     * const count = await prisma.monitoringConfig.count({
     *   where: {
     *     // ... the filter for the MonitoringConfigs we want to count
     *   }
     * })
    **/
    count<T extends MonitoringConfigCountArgs>(
      args?: Subset<T, MonitoringConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonitoringConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonitoringConfigAggregateArgs>(args: Subset<T, MonitoringConfigAggregateArgs>): Prisma.PrismaPromise<GetMonitoringConfigAggregateType<T>>

    /**
     * Group by MonitoringConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringConfigGroupByArgs} args - Group by arguments.
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
      T extends MonitoringConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringConfigGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonitoringConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonitoringConfig model
   */
  readonly fields: MonitoringConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonitoringConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deployments<T extends MonitoringConfig$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringConfig$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany"> | Null>
    plans<T extends MonitoringConfig$plansArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringConfig$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MonitoringConfig model
   */ 
  interface MonitoringConfigFieldRefs {
    readonly id: FieldRef<"MonitoringConfig", 'String'>
    readonly logs: FieldRef<"MonitoringConfig", 'Json'>
    readonly traces: FieldRef<"MonitoringConfig", 'Json'>
    readonly metrics: FieldRef<"MonitoringConfig", 'Json'>
    readonly createdAt: FieldRef<"MonitoringConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"MonitoringConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonitoringConfig findUnique
   */
  export type MonitoringConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringConfig to fetch.
     */
    where: MonitoringConfigWhereUniqueInput
  }

  /**
   * MonitoringConfig findUniqueOrThrow
   */
  export type MonitoringConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringConfig to fetch.
     */
    where: MonitoringConfigWhereUniqueInput
  }

  /**
   * MonitoringConfig findFirst
   */
  export type MonitoringConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringConfig to fetch.
     */
    where?: MonitoringConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringConfigs to fetch.
     */
    orderBy?: MonitoringConfigOrderByWithRelationInput | MonitoringConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringConfigs.
     */
    cursor?: MonitoringConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringConfigs.
     */
    distinct?: MonitoringConfigScalarFieldEnum | MonitoringConfigScalarFieldEnum[]
  }

  /**
   * MonitoringConfig findFirstOrThrow
   */
  export type MonitoringConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringConfig to fetch.
     */
    where?: MonitoringConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringConfigs to fetch.
     */
    orderBy?: MonitoringConfigOrderByWithRelationInput | MonitoringConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringConfigs.
     */
    cursor?: MonitoringConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringConfigs.
     */
    distinct?: MonitoringConfigScalarFieldEnum | MonitoringConfigScalarFieldEnum[]
  }

  /**
   * MonitoringConfig findMany
   */
  export type MonitoringConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringConfigs to fetch.
     */
    where?: MonitoringConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringConfigs to fetch.
     */
    orderBy?: MonitoringConfigOrderByWithRelationInput | MonitoringConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonitoringConfigs.
     */
    cursor?: MonitoringConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringConfigs.
     */
    skip?: number
    distinct?: MonitoringConfigScalarFieldEnum | MonitoringConfigScalarFieldEnum[]
  }

  /**
   * MonitoringConfig create
   */
  export type MonitoringConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a MonitoringConfig.
     */
    data: XOR<MonitoringConfigCreateInput, MonitoringConfigUncheckedCreateInput>
  }

  /**
   * MonitoringConfig createMany
   */
  export type MonitoringConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringConfigs.
     */
    data: MonitoringConfigCreateManyInput | MonitoringConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringConfig createManyAndReturn
   */
  export type MonitoringConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonitoringConfigs.
     */
    data: MonitoringConfigCreateManyInput | MonitoringConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringConfig update
   */
  export type MonitoringConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a MonitoringConfig.
     */
    data: XOR<MonitoringConfigUpdateInput, MonitoringConfigUncheckedUpdateInput>
    /**
     * Choose, which MonitoringConfig to update.
     */
    where: MonitoringConfigWhereUniqueInput
  }

  /**
   * MonitoringConfig updateMany
   */
  export type MonitoringConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringConfigs.
     */
    data: XOR<MonitoringConfigUpdateManyMutationInput, MonitoringConfigUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringConfigs to update
     */
    where?: MonitoringConfigWhereInput
  }

  /**
   * MonitoringConfig upsert
   */
  export type MonitoringConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the MonitoringConfig to update in case it exists.
     */
    where: MonitoringConfigWhereUniqueInput
    /**
     * In case the MonitoringConfig found by the `where` argument doesn't exist, create a new MonitoringConfig with this data.
     */
    create: XOR<MonitoringConfigCreateInput, MonitoringConfigUncheckedCreateInput>
    /**
     * In case the MonitoringConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringConfigUpdateInput, MonitoringConfigUncheckedUpdateInput>
  }

  /**
   * MonitoringConfig delete
   */
  export type MonitoringConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
    /**
     * Filter which MonitoringConfig to delete.
     */
    where: MonitoringConfigWhereUniqueInput
  }

  /**
   * MonitoringConfig deleteMany
   */
  export type MonitoringConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringConfigs to delete
     */
    where?: MonitoringConfigWhereInput
  }

  /**
   * MonitoringConfig.deployments
   */
  export type MonitoringConfig$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MonitoringConfig.plans
   */
  export type MonitoringConfig$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * MonitoringConfig without action
   */
  export type MonitoringConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringConfig
     */
    select?: MonitoringConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringConfigInclude<ExtArgs> | null
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


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    gitRepoUrl: 'gitRepoUrl',
    typeId: 'typeId',
    subtypeId: 'subtypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ServiceTypeScalarFieldEnum = (typeof ServiceTypeScalarFieldEnum)[keyof typeof ServiceTypeScalarFieldEnum]


  export const ServiceSubtypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serviceTypeId: 'serviceTypeId'
  };

  export type ServiceSubtypeScalarFieldEnum = (typeof ServiceSubtypeScalarFieldEnum)[keyof typeof ServiceSubtypeScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const ProviderTypeScalarFieldEnum: {
    id: 'id'
  };

  export type ProviderTypeScalarFieldEnum = (typeof ProviderTypeScalarFieldEnum)[keyof typeof ProviderTypeScalarFieldEnum]


  export const PricingPlanScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    cost: 'cost',
    billingUnit: 'billingUnit',
    customConfig: 'customConfig',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingPlanScalarFieldEnum = (typeof PricingPlanScalarFieldEnum)[keyof typeof PricingPlanScalarFieldEnum]


  export const EnvironmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentScalarFieldEnum = (typeof EnvironmentScalarFieldEnum)[keyof typeof EnvironmentScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    environmentId: 'environmentId',
    serviceId: 'serviceId',
    planId: 'planId',
    status: 'status',
    monitoringConfigId: 'monitoringConfigId',
    telemetryDashboards: 'telemetryDashboards',
    appVersion: 'appVersion',
    microServiceVersions: 'microServiceVersions',
    dbVersion: 'dbVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    providerId: 'providerId',
    pricingPlanId: 'pricingPlanId',
    deploymentConfig: 'deploymentConfig',
    monitoringConfigId: 'monitoringConfigId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const MonitoringConfigScalarFieldEnum: {
    id: 'id',
    logs: 'logs',
    traces: 'traces',
    metrics: 'metrics',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonitoringConfigScalarFieldEnum = (typeof MonitoringConfigScalarFieldEnum)[keyof typeof MonitoringConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BillingUnit'
   */
  export type EnumBillingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingUnit'>
    


  /**
   * Reference to a field of type 'BillingUnit[]'
   */
  export type ListEnumBillingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingUnit[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DeploymentStatus'
   */
  export type EnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus'>
    


  /**
   * Reference to a field of type 'DeploymentStatus[]'
   */
  export type ListEnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    services?: ServiceListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    services?: ServiceListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    projectId?: StringFilter<"Service"> | string
    gitRepoUrl?: StringFilter<"Service"> | string
    typeId?: StringFilter<"Service"> | string
    subtypeId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    deployments?: DeploymentListRelationFilter
    type?: XOR<ServiceTypeRelationFilter, ServiceTypeWhereInput>
    subtype?: XOR<ServiceSubtypeNullableRelationFilter, ServiceSubtypeWhereInput> | null
    deployedIn?: DeploymentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    gitRepoUrl?: SortOrder
    typeId?: SortOrder
    subtypeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    deployments?: DeploymentOrderByRelationAggregateInput
    type?: ServiceTypeOrderByWithRelationInput
    subtype?: ServiceSubtypeOrderByWithRelationInput
    deployedIn?: DeploymentOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    projectId?: StringFilter<"Service"> | string
    gitRepoUrl?: StringFilter<"Service"> | string
    typeId?: StringFilter<"Service"> | string
    subtypeId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    deployments?: DeploymentListRelationFilter
    type?: XOR<ServiceTypeRelationFilter, ServiceTypeWhereInput>
    subtype?: XOR<ServiceSubtypeNullableRelationFilter, ServiceSubtypeWhereInput> | null
    deployedIn?: DeploymentListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    gitRepoUrl?: SortOrder
    typeId?: SortOrder
    subtypeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    projectId?: StringWithAggregatesFilter<"Service"> | string
    gitRepoUrl?: StringWithAggregatesFilter<"Service"> | string
    typeId?: StringWithAggregatesFilter<"Service"> | string
    subtypeId?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServiceTypeWhereInput = {
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    id?: StringFilter<"ServiceType"> | string
    name?: StringFilter<"ServiceType"> | string
    subtypes?: ServiceSubtypeListRelationFilter
    services?: ServiceListRelationFilter
  }

  export type ServiceTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subtypes?: ServiceSubtypeOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    subtypes?: ServiceSubtypeListRelationFilter
    services?: ServiceListRelationFilter
  }, "id" | "name">

  export type ServiceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ServiceTypeCountOrderByAggregateInput
    _max?: ServiceTypeMaxOrderByAggregateInput
    _min?: ServiceTypeMinOrderByAggregateInput
  }

  export type ServiceTypeScalarWhereWithAggregatesInput = {
    AND?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    OR?: ServiceTypeScalarWhereWithAggregatesInput[]
    NOT?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceType"> | string
    name?: StringWithAggregatesFilter<"ServiceType"> | string
  }

  export type ServiceSubtypeWhereInput = {
    AND?: ServiceSubtypeWhereInput | ServiceSubtypeWhereInput[]
    OR?: ServiceSubtypeWhereInput[]
    NOT?: ServiceSubtypeWhereInput | ServiceSubtypeWhereInput[]
    id?: StringFilter<"ServiceSubtype"> | string
    name?: StringFilter<"ServiceSubtype"> | string
    serviceTypeId?: StringFilter<"ServiceSubtype"> | string
    serviceType?: XOR<ServiceTypeRelationFilter, ServiceTypeWhereInput>
    services?: ServiceListRelationFilter
  }

  export type ServiceSubtypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceTypeId?: SortOrder
    serviceType?: ServiceTypeOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceSubtypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ServiceSubtypeWhereInput | ServiceSubtypeWhereInput[]
    OR?: ServiceSubtypeWhereInput[]
    NOT?: ServiceSubtypeWhereInput | ServiceSubtypeWhereInput[]
    serviceTypeId?: StringFilter<"ServiceSubtype"> | string
    serviceType?: XOR<ServiceTypeRelationFilter, ServiceTypeWhereInput>
    services?: ServiceListRelationFilter
  }, "id" | "name">

  export type ServiceSubtypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceTypeId?: SortOrder
    _count?: ServiceSubtypeCountOrderByAggregateInput
    _max?: ServiceSubtypeMaxOrderByAggregateInput
    _min?: ServiceSubtypeMinOrderByAggregateInput
  }

  export type ServiceSubtypeScalarWhereWithAggregatesInput = {
    AND?: ServiceSubtypeScalarWhereWithAggregatesInput | ServiceSubtypeScalarWhereWithAggregatesInput[]
    OR?: ServiceSubtypeScalarWhereWithAggregatesInput[]
    NOT?: ServiceSubtypeScalarWhereWithAggregatesInput | ServiceSubtypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceSubtype"> | string
    name?: StringWithAggregatesFilter<"ServiceSubtype"> | string
    serviceTypeId?: StringWithAggregatesFilter<"ServiceSubtype"> | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    typeId?: StringFilter<"Provider"> | string
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    type?: XOR<ProviderTypeRelationFilter, ProviderTypeWhereInput>
    pricingPlans?: PricingPlanListRelationFilter
    plans?: PlanListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: ProviderTypeOrderByWithRelationInput
    pricingPlans?: PricingPlanOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    typeId?: StringFilter<"Provider"> | string
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    type?: XOR<ProviderTypeRelationFilter, ProviderTypeWhereInput>
    pricingPlans?: PricingPlanListRelationFilter
    plans?: PlanListRelationFilter
  }, "id" | "name">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    typeId?: StringWithAggregatesFilter<"Provider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type ProviderTypeWhereInput = {
    AND?: ProviderTypeWhereInput | ProviderTypeWhereInput[]
    OR?: ProviderTypeWhereInput[]
    NOT?: ProviderTypeWhereInput | ProviderTypeWhereInput[]
    id?: StringFilter<"ProviderType"> | string
    providers?: ProviderListRelationFilter
  }

  export type ProviderTypeOrderByWithRelationInput = {
    id?: SortOrder
    providers?: ProviderOrderByRelationAggregateInput
  }

  export type ProviderTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderTypeWhereInput | ProviderTypeWhereInput[]
    OR?: ProviderTypeWhereInput[]
    NOT?: ProviderTypeWhereInput | ProviderTypeWhereInput[]
    providers?: ProviderListRelationFilter
  }, "id">

  export type ProviderTypeOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ProviderTypeCountOrderByAggregateInput
    _max?: ProviderTypeMaxOrderByAggregateInput
    _min?: ProviderTypeMinOrderByAggregateInput
  }

  export type ProviderTypeScalarWhereWithAggregatesInput = {
    AND?: ProviderTypeScalarWhereWithAggregatesInput | ProviderTypeScalarWhereWithAggregatesInput[]
    OR?: ProviderTypeScalarWhereWithAggregatesInput[]
    NOT?: ProviderTypeScalarWhereWithAggregatesInput | ProviderTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderType"> | string
  }

  export type PricingPlanWhereInput = {
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    id?: StringFilter<"PricingPlan"> | string
    providerId?: StringFilter<"PricingPlan"> | string
    cost?: FloatFilter<"PricingPlan"> | number
    billingUnit?: EnumBillingUnitFilter<"PricingPlan"> | $Enums.BillingUnit
    customConfig?: JsonFilter<"PricingPlan">
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
    plans?: PlanListRelationFilter
  }

  export type PricingPlanOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    cost?: SortOrder
    billingUnit?: SortOrder
    customConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    plans?: PlanOrderByRelationAggregateInput
  }

  export type PricingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    providerId?: StringFilter<"PricingPlan"> | string
    cost?: FloatFilter<"PricingPlan"> | number
    billingUnit?: EnumBillingUnitFilter<"PricingPlan"> | $Enums.BillingUnit
    customConfig?: JsonFilter<"PricingPlan">
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
    plans?: PlanListRelationFilter
  }, "id">

  export type PricingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    cost?: SortOrder
    billingUnit?: SortOrder
    customConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingPlanCountOrderByAggregateInput
    _avg?: PricingPlanAvgOrderByAggregateInput
    _max?: PricingPlanMaxOrderByAggregateInput
    _min?: PricingPlanMinOrderByAggregateInput
    _sum?: PricingPlanSumOrderByAggregateInput
  }

  export type PricingPlanScalarWhereWithAggregatesInput = {
    AND?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    OR?: PricingPlanScalarWhereWithAggregatesInput[]
    NOT?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingPlan"> | string
    providerId?: StringWithAggregatesFilter<"PricingPlan"> | string
    cost?: FloatWithAggregatesFilter<"PricingPlan"> | number
    billingUnit?: EnumBillingUnitWithAggregatesFilter<"PricingPlan"> | $Enums.BillingUnit
    customConfig?: JsonWithAggregatesFilter<"PricingPlan">
    createdAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
  }

  export type EnvironmentWhereInput = {
    AND?: EnvironmentWhereInput | EnvironmentWhereInput[]
    OR?: EnvironmentWhereInput[]
    NOT?: EnvironmentWhereInput | EnvironmentWhereInput[]
    id?: StringFilter<"Environment"> | string
    name?: StringFilter<"Environment"> | string
    description?: StringFilter<"Environment"> | string
    createdAt?: DateTimeFilter<"Environment"> | Date | string
    updatedAt?: DateTimeFilter<"Environment"> | Date | string
    deployments?: DeploymentListRelationFilter
  }

  export type EnvironmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployments?: DeploymentOrderByRelationAggregateInput
  }

  export type EnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EnvironmentWhereInput | EnvironmentWhereInput[]
    OR?: EnvironmentWhereInput[]
    NOT?: EnvironmentWhereInput | EnvironmentWhereInput[]
    description?: StringFilter<"Environment"> | string
    createdAt?: DateTimeFilter<"Environment"> | Date | string
    updatedAt?: DateTimeFilter<"Environment"> | Date | string
    deployments?: DeploymentListRelationFilter
  }, "id" | "name">

  export type EnvironmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentCountOrderByAggregateInput
    _max?: EnvironmentMaxOrderByAggregateInput
    _min?: EnvironmentMinOrderByAggregateInput
  }

  export type EnvironmentScalarWhereWithAggregatesInput = {
    AND?: EnvironmentScalarWhereWithAggregatesInput | EnvironmentScalarWhereWithAggregatesInput[]
    OR?: EnvironmentScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentScalarWhereWithAggregatesInput | EnvironmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Environment"> | string
    name?: StringWithAggregatesFilter<"Environment"> | string
    description?: StringWithAggregatesFilter<"Environment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Environment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Environment"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: StringFilter<"Deployment"> | string
    name?: StringFilter<"Deployment"> | string
    description?: StringFilter<"Deployment"> | string
    environmentId?: StringFilter<"Deployment"> | string
    serviceId?: StringFilter<"Deployment"> | string
    planId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    monitoringConfigId?: StringNullableFilter<"Deployment"> | string | null
    telemetryDashboards?: JsonFilter<"Deployment">
    appVersion?: StringFilter<"Deployment"> | string
    microServiceVersions?: StringNullableListFilter<"Deployment">
    dbVersion?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    environment?: XOR<EnvironmentRelationFilter, EnvironmentWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    monitoringConfig?: XOR<MonitoringConfigNullableRelationFilter, MonitoringConfigWhereInput> | null
    microServices?: ServiceListRelationFilter
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    environmentId?: SortOrder
    serviceId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    monitoringConfigId?: SortOrderInput | SortOrder
    telemetryDashboards?: SortOrder
    appVersion?: SortOrder
    microServiceVersions?: SortOrder
    dbVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    environment?: EnvironmentOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    monitoringConfig?: MonitoringConfigOrderByWithRelationInput
    microServices?: ServiceOrderByRelationAggregateInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    name?: StringFilter<"Deployment"> | string
    description?: StringFilter<"Deployment"> | string
    environmentId?: StringFilter<"Deployment"> | string
    serviceId?: StringFilter<"Deployment"> | string
    planId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    monitoringConfigId?: StringNullableFilter<"Deployment"> | string | null
    telemetryDashboards?: JsonFilter<"Deployment">
    appVersion?: StringFilter<"Deployment"> | string
    microServiceVersions?: StringNullableListFilter<"Deployment">
    dbVersion?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    environment?: XOR<EnvironmentRelationFilter, EnvironmentWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    monitoringConfig?: XOR<MonitoringConfigNullableRelationFilter, MonitoringConfigWhereInput> | null
    microServices?: ServiceListRelationFilter
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    environmentId?: SortOrder
    serviceId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    monitoringConfigId?: SortOrderInput | SortOrder
    telemetryDashboards?: SortOrder
    appVersion?: SortOrder
    microServiceVersions?: SortOrder
    dbVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deployment"> | string
    name?: StringWithAggregatesFilter<"Deployment"> | string
    description?: StringWithAggregatesFilter<"Deployment"> | string
    environmentId?: StringWithAggregatesFilter<"Deployment"> | string
    serviceId?: StringWithAggregatesFilter<"Deployment"> | string
    planId?: StringWithAggregatesFilter<"Deployment"> | string
    status?: EnumDeploymentStatusWithAggregatesFilter<"Deployment"> | $Enums.DeploymentStatus
    monitoringConfigId?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    telemetryDashboards?: JsonWithAggregatesFilter<"Deployment">
    appVersion?: StringWithAggregatesFilter<"Deployment"> | string
    microServiceVersions?: StringNullableListFilter<"Deployment">
    dbVersion?: StringWithAggregatesFilter<"Deployment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    providerId?: StringFilter<"Plan"> | string
    pricingPlanId?: StringNullableFilter<"Plan"> | string | null
    deploymentConfig?: JsonFilter<"Plan">
    monitoringConfigId?: StringNullableFilter<"Plan"> | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
    pricingPlan?: XOR<PricingPlanNullableRelationFilter, PricingPlanWhereInput> | null
    monitoringConfig?: XOR<MonitoringConfigNullableRelationFilter, MonitoringConfigWhereInput> | null
    deployments?: DeploymentListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    pricingPlanId?: SortOrderInput | SortOrder
    deploymentConfig?: SortOrder
    monitoringConfigId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    pricingPlan?: PricingPlanOrderByWithRelationInput
    monitoringConfig?: MonitoringConfigOrderByWithRelationInput
    deployments?: DeploymentOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    providerId?: StringFilter<"Plan"> | string
    pricingPlanId?: StringNullableFilter<"Plan"> | string | null
    deploymentConfig?: JsonFilter<"Plan">
    monitoringConfigId?: StringNullableFilter<"Plan"> | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    provider?: XOR<ProviderRelationFilter, ProviderWhereInput>
    pricingPlan?: XOR<PricingPlanNullableRelationFilter, PricingPlanWhereInput> | null
    monitoringConfig?: XOR<MonitoringConfigNullableRelationFilter, MonitoringConfigWhereInput> | null
    deployments?: DeploymentListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    pricingPlanId?: SortOrderInput | SortOrder
    deploymentConfig?: SortOrder
    monitoringConfigId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    providerId?: StringWithAggregatesFilter<"Plan"> | string
    pricingPlanId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    deploymentConfig?: JsonWithAggregatesFilter<"Plan">
    monitoringConfigId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type MonitoringConfigWhereInput = {
    AND?: MonitoringConfigWhereInput | MonitoringConfigWhereInput[]
    OR?: MonitoringConfigWhereInput[]
    NOT?: MonitoringConfigWhereInput | MonitoringConfigWhereInput[]
    id?: StringFilter<"MonitoringConfig"> | string
    logs?: JsonFilter<"MonitoringConfig">
    traces?: JsonFilter<"MonitoringConfig">
    metrics?: JsonFilter<"MonitoringConfig">
    createdAt?: DateTimeFilter<"MonitoringConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MonitoringConfig"> | Date | string
    deployments?: DeploymentListRelationFilter
    plans?: PlanListRelationFilter
  }

  export type MonitoringConfigOrderByWithRelationInput = {
    id?: SortOrder
    logs?: SortOrder
    traces?: SortOrder
    metrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployments?: DeploymentOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
  }

  export type MonitoringConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitoringConfigWhereInput | MonitoringConfigWhereInput[]
    OR?: MonitoringConfigWhereInput[]
    NOT?: MonitoringConfigWhereInput | MonitoringConfigWhereInput[]
    logs?: JsonFilter<"MonitoringConfig">
    traces?: JsonFilter<"MonitoringConfig">
    metrics?: JsonFilter<"MonitoringConfig">
    createdAt?: DateTimeFilter<"MonitoringConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MonitoringConfig"> | Date | string
    deployments?: DeploymentListRelationFilter
    plans?: PlanListRelationFilter
  }, "id">

  export type MonitoringConfigOrderByWithAggregationInput = {
    id?: SortOrder
    logs?: SortOrder
    traces?: SortOrder
    metrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonitoringConfigCountOrderByAggregateInput
    _max?: MonitoringConfigMaxOrderByAggregateInput
    _min?: MonitoringConfigMinOrderByAggregateInput
  }

  export type MonitoringConfigScalarWhereWithAggregatesInput = {
    AND?: MonitoringConfigScalarWhereWithAggregatesInput | MonitoringConfigScalarWhereWithAggregatesInput[]
    OR?: MonitoringConfigScalarWhereWithAggregatesInput[]
    NOT?: MonitoringConfigScalarWhereWithAggregatesInput | MonitoringConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonitoringConfig"> | string
    logs?: JsonWithAggregatesFilter<"MonitoringConfig">
    traces?: JsonWithAggregatesFilter<"MonitoringConfig">
    metrics?: JsonWithAggregatesFilter<"MonitoringConfig">
    createdAt?: DateTimeWithAggregatesFilter<"MonitoringConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonitoringConfig"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    deployments?: DeploymentCreateNestedManyWithoutServiceInput
    type: ServiceTypeCreateNestedOneWithoutServicesInput
    subtype?: ServiceSubtypeCreateNestedOneWithoutServicesInput
    deployedIn?: DeploymentCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutServiceInput
    deployedIn?: DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    deployments?: DeploymentUpdateManyWithoutServiceNestedInput
    type?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
    subtype?: ServiceSubtypeUpdateOneWithoutServicesNestedInput
    deployedIn?: DeploymentUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutServiceNestedInput
    deployedIn?: DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceTypeCreateInput = {
    id?: string
    name: string
    subtypes?: ServiceSubtypeCreateNestedManyWithoutServiceTypeInput
    services?: ServiceCreateNestedManyWithoutTypeInput
  }

  export type ServiceTypeUncheckedCreateInput = {
    id?: string
    name: string
    subtypes?: ServiceSubtypeUncheckedCreateNestedManyWithoutServiceTypeInput
    services?: ServiceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ServiceTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subtypes?: ServiceSubtypeUpdateManyWithoutServiceTypeNestedInput
    services?: ServiceUpdateManyWithoutTypeNestedInput
  }

  export type ServiceTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subtypes?: ServiceSubtypeUncheckedUpdateManyWithoutServiceTypeNestedInput
    services?: ServiceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ServiceTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type ServiceTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceSubtypeCreateInput = {
    id?: string
    name: string
    serviceType: ServiceTypeCreateNestedOneWithoutSubtypesInput
    services?: ServiceCreateNestedManyWithoutSubtypeInput
  }

  export type ServiceSubtypeUncheckedCreateInput = {
    id?: string
    name: string
    serviceTypeId: string
    services?: ServiceUncheckedCreateNestedManyWithoutSubtypeInput
  }

  export type ServiceSubtypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: ServiceTypeUpdateOneRequiredWithoutSubtypesNestedInput
    services?: ServiceUpdateManyWithoutSubtypeNestedInput
  }

  export type ServiceSubtypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutSubtypeNestedInput
  }

  export type ServiceSubtypeCreateManyInput = {
    id?: string
    name: string
    serviceTypeId: string
  }

  export type ServiceSubtypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceSubtypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: ProviderTypeCreateNestedOneWithoutProvidersInput
    pricingPlans?: PricingPlanCreateNestedManyWithoutProviderInput
    plans?: PlanCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingPlans?: PricingPlanUncheckedCreateNestedManyWithoutProviderInput
    plans?: PlanUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ProviderTypeUpdateOneRequiredWithoutProvidersNestedInput
    pricingPlans?: PricingPlanUpdateManyWithoutProviderNestedInput
    plans?: PlanUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingPlans?: PricingPlanUncheckedUpdateManyWithoutProviderNestedInput
    plans?: PlanUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderTypeCreateInput = {
    id: string
    providers?: ProviderCreateNestedManyWithoutTypeInput
  }

  export type ProviderTypeUncheckedCreateInput = {
    id: string
    providers?: ProviderUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ProviderTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providers?: ProviderUpdateManyWithoutTypeNestedInput
  }

  export type ProviderTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providers?: ProviderUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ProviderTypeCreateManyInput = {
    id: string
  }

  export type ProviderTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PricingPlanCreateInput = {
    id?: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPricingPlansInput
    plans?: PlanCreateNestedManyWithoutPricingPlanInput
  }

  export type PricingPlanUncheckedCreateInput = {
    id?: string
    providerId: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutPricingPlanInput
  }

  export type PricingPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPricingPlansNestedInput
    plans?: PlanUpdateManyWithoutPricingPlanNestedInput
  }

  export type PricingPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutPricingPlanNestedInput
  }

  export type PricingPlanCreateManyInput = {
    id?: string
    providerId: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutDeploymentsInput
    service: ServiceCreateNestedOneWithoutDeploymentsInput
    plan: PlanCreateNestedOneWithoutDeploymentsInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutDeploymentsInput
    microServices?: ServiceCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    microServices?: ServiceUncheckedCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutDeploymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutDeploymentsNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutDeploymentsNestedInput
    microServices?: ServiceUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microServices?: ServiceUncheckedUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentCreateManyInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPlansInput
    pricingPlan?: PricingPlanCreateNestedOneWithoutPlansInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutPlansInput
    deployments?: DeploymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    providerId: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPlansNestedInput
    pricingPlan?: PricingPlanUpdateOneWithoutPlansNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutPlansNestedInput
    deployments?: DeploymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    providerId: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringConfigCreateInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutMonitoringConfigInput
    plans?: PlanCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigUncheckedCreateInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutMonitoringConfigInput
    plans?: PlanUncheckedCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutMonitoringConfigNestedInput
    plans?: PlanUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type MonitoringConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutMonitoringConfigNestedInput
    plans?: PlanUncheckedUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type MonitoringConfigCreateManyInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type ServiceTypeRelationFilter = {
    is?: ServiceTypeWhereInput
    isNot?: ServiceTypeWhereInput
  }

  export type ServiceSubtypeNullableRelationFilter = {
    is?: ServiceSubtypeWhereInput | null
    isNot?: ServiceSubtypeWhereInput | null
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    gitRepoUrl?: SortOrder
    typeId?: SortOrder
    subtypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    gitRepoUrl?: SortOrder
    typeId?: SortOrder
    subtypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    gitRepoUrl?: SortOrder
    typeId?: SortOrder
    subtypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSubtypeListRelationFilter = {
    every?: ServiceSubtypeWhereInput
    some?: ServiceSubtypeWhereInput
    none?: ServiceSubtypeWhereInput
  }

  export type ServiceSubtypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ServiceSubtypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceTypeId?: SortOrder
  }

  export type ServiceSubtypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceTypeId?: SortOrder
  }

  export type ServiceSubtypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceTypeId?: SortOrder
  }

  export type ProviderTypeRelationFilter = {
    is?: ProviderTypeWhereInput
    isNot?: ProviderTypeWhereInput
  }

  export type PricingPlanListRelationFilter = {
    every?: PricingPlanWhereInput
    some?: PricingPlanWhereInput
    none?: PricingPlanWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type PricingPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderListRelationFilter = {
    every?: ProviderWhereInput
    some?: ProviderWhereInput
    none?: ProviderWhereInput
  }

  export type ProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderTypeCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderTypeMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProviderTypeMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumBillingUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingUnit | EnumBillingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingUnitFilter<$PrismaModel> | $Enums.BillingUnit
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

  export type ProviderRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type PricingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    cost?: SortOrder
    billingUnit?: SortOrder
    customConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type PricingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    cost?: SortOrder
    billingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    cost?: SortOrder
    billingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBillingUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingUnit | EnumBillingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingUnitWithAggregatesFilter<$PrismaModel> | $Enums.BillingUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingUnitFilter<$PrismaModel>
    _max?: NestedEnumBillingUnitFilter<$PrismaModel>
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

  export type EnvironmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnvironmentRelationFilter = {
    is?: EnvironmentWhereInput
    isNot?: EnvironmentWhereInput
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type MonitoringConfigNullableRelationFilter = {
    is?: MonitoringConfigWhereInput | null
    isNot?: MonitoringConfigWhereInput | null
  }

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    environmentId?: SortOrder
    serviceId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    monitoringConfigId?: SortOrder
    telemetryDashboards?: SortOrder
    appVersion?: SortOrder
    microServiceVersions?: SortOrder
    dbVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    environmentId?: SortOrder
    serviceId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    monitoringConfigId?: SortOrder
    appVersion?: SortOrder
    dbVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    environmentId?: SortOrder
    serviceId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    monitoringConfigId?: SortOrder
    appVersion?: SortOrder
    dbVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type PricingPlanNullableRelationFilter = {
    is?: PricingPlanWhereInput | null
    isNot?: PricingPlanWhereInput | null
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    pricingPlanId?: SortOrder
    deploymentConfig?: SortOrder
    monitoringConfigId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    pricingPlanId?: SortOrder
    monitoringConfigId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    pricingPlanId?: SortOrder
    monitoringConfigId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringConfigCountOrderByAggregateInput = {
    id?: SortOrder
    logs?: SortOrder
    traces?: SortOrder
    metrics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringConfigMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCreateNestedManyWithoutProjectInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput> | ServiceCreateWithoutProjectInput[] | ServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectInput | ServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ServiceCreateManyProjectInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type ProjectCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutServicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type DeploymentCreateNestedManyWithoutServiceInput = {
    create?: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput> | DeploymentCreateWithoutServiceInput[] | DeploymentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutServiceInput | DeploymentCreateOrConnectWithoutServiceInput[]
    createMany?: DeploymentCreateManyServiceInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ServiceTypeCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServicesInput
    connect?: ServiceTypeWhereUniqueInput
  }

  export type ServiceSubtypeCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServicesInput, ServiceSubtypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServicesInput
    connect?: ServiceSubtypeWhereUniqueInput
  }

  export type DeploymentCreateNestedManyWithoutMicroServicesInput = {
    create?: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput> | DeploymentCreateWithoutMicroServicesInput[] | DeploymentUncheckedCreateWithoutMicroServicesInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMicroServicesInput | DeploymentCreateOrConnectWithoutMicroServicesInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput> | DeploymentCreateWithoutServiceInput[] | DeploymentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutServiceInput | DeploymentCreateOrConnectWithoutServiceInput[]
    createMany?: DeploymentCreateManyServiceInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput = {
    create?: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput> | DeploymentCreateWithoutMicroServicesInput[] | DeploymentUncheckedCreateWithoutMicroServicesInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMicroServicesInput | DeploymentCreateOrConnectWithoutMicroServicesInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutServicesInput
    upsert?: ProjectUpsertWithoutServicesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutServicesInput, ProjectUpdateWithoutServicesInput>, ProjectUncheckedUpdateWithoutServicesInput>
  }

  export type DeploymentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput> | DeploymentCreateWithoutServiceInput[] | DeploymentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutServiceInput | DeploymentCreateOrConnectWithoutServiceInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutServiceInput | DeploymentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DeploymentCreateManyServiceInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutServiceInput | DeploymentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutServiceInput | DeploymentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ServiceTypeUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServicesInput
    upsert?: ServiceTypeUpsertWithoutServicesInput
    connect?: ServiceTypeWhereUniqueInput
    update?: XOR<XOR<ServiceTypeUpdateToOneWithWhereWithoutServicesInput, ServiceTypeUpdateWithoutServicesInput>, ServiceTypeUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceSubtypeUpdateOneWithoutServicesNestedInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServicesInput, ServiceSubtypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServicesInput
    upsert?: ServiceSubtypeUpsertWithoutServicesInput
    disconnect?: ServiceSubtypeWhereInput | boolean
    delete?: ServiceSubtypeWhereInput | boolean
    connect?: ServiceSubtypeWhereUniqueInput
    update?: XOR<XOR<ServiceSubtypeUpdateToOneWithWhereWithoutServicesInput, ServiceSubtypeUpdateWithoutServicesInput>, ServiceSubtypeUncheckedUpdateWithoutServicesInput>
  }

  export type DeploymentUpdateManyWithoutMicroServicesNestedInput = {
    create?: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput> | DeploymentCreateWithoutMicroServicesInput[] | DeploymentUncheckedCreateWithoutMicroServicesInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMicroServicesInput | DeploymentCreateOrConnectWithoutMicroServicesInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutMicroServicesInput | DeploymentUpsertWithWhereUniqueWithoutMicroServicesInput[]
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutMicroServicesInput | DeploymentUpdateWithWhereUniqueWithoutMicroServicesInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutMicroServicesInput | DeploymentUpdateManyWithWhereWithoutMicroServicesInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput> | DeploymentCreateWithoutServiceInput[] | DeploymentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutServiceInput | DeploymentCreateOrConnectWithoutServiceInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutServiceInput | DeploymentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DeploymentCreateManyServiceInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutServiceInput | DeploymentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutServiceInput | DeploymentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput = {
    create?: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput> | DeploymentCreateWithoutMicroServicesInput[] | DeploymentUncheckedCreateWithoutMicroServicesInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMicroServicesInput | DeploymentCreateOrConnectWithoutMicroServicesInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutMicroServicesInput | DeploymentUpsertWithWhereUniqueWithoutMicroServicesInput[]
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutMicroServicesInput | DeploymentUpdateWithWhereUniqueWithoutMicroServicesInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutMicroServicesInput | DeploymentUpdateManyWithWhereWithoutMicroServicesInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ServiceSubtypeCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput> | ServiceSubtypeCreateWithoutServiceTypeInput[] | ServiceSubtypeUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServiceTypeInput | ServiceSubtypeCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServiceSubtypeCreateManyServiceTypeInputEnvelope
    connect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutTypeInput = {
    create?: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput> | ServiceCreateWithoutTypeInput[] | ServiceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTypeInput | ServiceCreateOrConnectWithoutTypeInput[]
    createMany?: ServiceCreateManyTypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceSubtypeUncheckedCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput> | ServiceSubtypeCreateWithoutServiceTypeInput[] | ServiceSubtypeUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServiceTypeInput | ServiceSubtypeCreateOrConnectWithoutServiceTypeInput[]
    createMany?: ServiceSubtypeCreateManyServiceTypeInputEnvelope
    connect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput> | ServiceCreateWithoutTypeInput[] | ServiceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTypeInput | ServiceCreateOrConnectWithoutTypeInput[]
    createMany?: ServiceCreateManyTypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceSubtypeUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput> | ServiceSubtypeCreateWithoutServiceTypeInput[] | ServiceSubtypeUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServiceTypeInput | ServiceSubtypeCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServiceSubtypeUpsertWithWhereUniqueWithoutServiceTypeInput | ServiceSubtypeUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServiceSubtypeCreateManyServiceTypeInputEnvelope
    set?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    disconnect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    delete?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    connect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    update?: ServiceSubtypeUpdateWithWhereUniqueWithoutServiceTypeInput | ServiceSubtypeUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServiceSubtypeUpdateManyWithWhereWithoutServiceTypeInput | ServiceSubtypeUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServiceSubtypeScalarWhereInput | ServiceSubtypeScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput> | ServiceCreateWithoutTypeInput[] | ServiceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTypeInput | ServiceCreateOrConnectWithoutTypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutTypeInput | ServiceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ServiceCreateManyTypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutTypeInput | ServiceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutTypeInput | ServiceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceSubtypeUncheckedUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput> | ServiceSubtypeCreateWithoutServiceTypeInput[] | ServiceSubtypeUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: ServiceSubtypeCreateOrConnectWithoutServiceTypeInput | ServiceSubtypeCreateOrConnectWithoutServiceTypeInput[]
    upsert?: ServiceSubtypeUpsertWithWhereUniqueWithoutServiceTypeInput | ServiceSubtypeUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: ServiceSubtypeCreateManyServiceTypeInputEnvelope
    set?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    disconnect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    delete?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    connect?: ServiceSubtypeWhereUniqueInput | ServiceSubtypeWhereUniqueInput[]
    update?: ServiceSubtypeUpdateWithWhereUniqueWithoutServiceTypeInput | ServiceSubtypeUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: ServiceSubtypeUpdateManyWithWhereWithoutServiceTypeInput | ServiceSubtypeUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: ServiceSubtypeScalarWhereInput | ServiceSubtypeScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput> | ServiceCreateWithoutTypeInput[] | ServiceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutTypeInput | ServiceCreateOrConnectWithoutTypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutTypeInput | ServiceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ServiceCreateManyTypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutTypeInput | ServiceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutTypeInput | ServiceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceTypeCreateNestedOneWithoutSubtypesInput = {
    create?: XOR<ServiceTypeCreateWithoutSubtypesInput, ServiceTypeUncheckedCreateWithoutSubtypesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutSubtypesInput
    connect?: ServiceTypeWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutSubtypeInput = {
    create?: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput> | ServiceCreateWithoutSubtypeInput[] | ServiceUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSubtypeInput | ServiceCreateOrConnectWithoutSubtypeInput[]
    createMany?: ServiceCreateManySubtypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutSubtypeInput = {
    create?: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput> | ServiceCreateWithoutSubtypeInput[] | ServiceUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSubtypeInput | ServiceCreateOrConnectWithoutSubtypeInput[]
    createMany?: ServiceCreateManySubtypeInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceTypeUpdateOneRequiredWithoutSubtypesNestedInput = {
    create?: XOR<ServiceTypeCreateWithoutSubtypesInput, ServiceTypeUncheckedCreateWithoutSubtypesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutSubtypesInput
    upsert?: ServiceTypeUpsertWithoutSubtypesInput
    connect?: ServiceTypeWhereUniqueInput
    update?: XOR<XOR<ServiceTypeUpdateToOneWithWhereWithoutSubtypesInput, ServiceTypeUpdateWithoutSubtypesInput>, ServiceTypeUncheckedUpdateWithoutSubtypesInput>
  }

  export type ServiceUpdateManyWithoutSubtypeNestedInput = {
    create?: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput> | ServiceCreateWithoutSubtypeInput[] | ServiceUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSubtypeInput | ServiceCreateOrConnectWithoutSubtypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSubtypeInput | ServiceUpsertWithWhereUniqueWithoutSubtypeInput[]
    createMany?: ServiceCreateManySubtypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSubtypeInput | ServiceUpdateWithWhereUniqueWithoutSubtypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSubtypeInput | ServiceUpdateManyWithWhereWithoutSubtypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutSubtypeNestedInput = {
    create?: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput> | ServiceCreateWithoutSubtypeInput[] | ServiceUncheckedCreateWithoutSubtypeInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSubtypeInput | ServiceCreateOrConnectWithoutSubtypeInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSubtypeInput | ServiceUpsertWithWhereUniqueWithoutSubtypeInput[]
    createMany?: ServiceCreateManySubtypeInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSubtypeInput | ServiceUpdateWithWhereUniqueWithoutSubtypeInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSubtypeInput | ServiceUpdateManyWithWhereWithoutSubtypeInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProviderTypeCreateNestedOneWithoutProvidersInput = {
    create?: XOR<ProviderTypeCreateWithoutProvidersInput, ProviderTypeUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: ProviderTypeCreateOrConnectWithoutProvidersInput
    connect?: ProviderTypeWhereUniqueInput
  }

  export type PricingPlanCreateNestedManyWithoutProviderInput = {
    create?: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput> | PricingPlanCreateWithoutProviderInput[] | PricingPlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutProviderInput | PricingPlanCreateOrConnectWithoutProviderInput[]
    createMany?: PricingPlanCreateManyProviderInputEnvelope
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutProviderInput = {
    create?: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput> | PlanCreateWithoutProviderInput[] | PlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutProviderInput | PlanCreateOrConnectWithoutProviderInput[]
    createMany?: PlanCreateManyProviderInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PricingPlanUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput> | PricingPlanCreateWithoutProviderInput[] | PricingPlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutProviderInput | PricingPlanCreateOrConnectWithoutProviderInput[]
    createMany?: PricingPlanCreateManyProviderInputEnvelope
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput> | PlanCreateWithoutProviderInput[] | PlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutProviderInput | PlanCreateOrConnectWithoutProviderInput[]
    createMany?: PlanCreateManyProviderInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type ProviderTypeUpdateOneRequiredWithoutProvidersNestedInput = {
    create?: XOR<ProviderTypeCreateWithoutProvidersInput, ProviderTypeUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: ProviderTypeCreateOrConnectWithoutProvidersInput
    upsert?: ProviderTypeUpsertWithoutProvidersInput
    connect?: ProviderTypeWhereUniqueInput
    update?: XOR<XOR<ProviderTypeUpdateToOneWithWhereWithoutProvidersInput, ProviderTypeUpdateWithoutProvidersInput>, ProviderTypeUncheckedUpdateWithoutProvidersInput>
  }

  export type PricingPlanUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput> | PricingPlanCreateWithoutProviderInput[] | PricingPlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutProviderInput | PricingPlanCreateOrConnectWithoutProviderInput[]
    upsert?: PricingPlanUpsertWithWhereUniqueWithoutProviderInput | PricingPlanUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PricingPlanCreateManyProviderInputEnvelope
    set?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    disconnect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    delete?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    update?: PricingPlanUpdateWithWhereUniqueWithoutProviderInput | PricingPlanUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PricingPlanUpdateManyWithWhereWithoutProviderInput | PricingPlanUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput> | PlanCreateWithoutProviderInput[] | PlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutProviderInput | PlanCreateOrConnectWithoutProviderInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutProviderInput | PlanUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PlanCreateManyProviderInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutProviderInput | PlanUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutProviderInput | PlanUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type PricingPlanUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput> | PricingPlanCreateWithoutProviderInput[] | PricingPlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutProviderInput | PricingPlanCreateOrConnectWithoutProviderInput[]
    upsert?: PricingPlanUpsertWithWhereUniqueWithoutProviderInput | PricingPlanUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PricingPlanCreateManyProviderInputEnvelope
    set?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    disconnect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    delete?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    update?: PricingPlanUpdateWithWhereUniqueWithoutProviderInput | PricingPlanUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PricingPlanUpdateManyWithWhereWithoutProviderInput | PricingPlanUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput> | PlanCreateWithoutProviderInput[] | PlanUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutProviderInput | PlanCreateOrConnectWithoutProviderInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutProviderInput | PlanUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PlanCreateManyProviderInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutProviderInput | PlanUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutProviderInput | PlanUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type ProviderCreateNestedManyWithoutTypeInput = {
    create?: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput> | ProviderCreateWithoutTypeInput[] | ProviderUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ProviderCreateOrConnectWithoutTypeInput | ProviderCreateOrConnectWithoutTypeInput[]
    createMany?: ProviderCreateManyTypeInputEnvelope
    connect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
  }

  export type ProviderUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput> | ProviderCreateWithoutTypeInput[] | ProviderUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ProviderCreateOrConnectWithoutTypeInput | ProviderCreateOrConnectWithoutTypeInput[]
    createMany?: ProviderCreateManyTypeInputEnvelope
    connect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
  }

  export type ProviderUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput> | ProviderCreateWithoutTypeInput[] | ProviderUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ProviderCreateOrConnectWithoutTypeInput | ProviderCreateOrConnectWithoutTypeInput[]
    upsert?: ProviderUpsertWithWhereUniqueWithoutTypeInput | ProviderUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ProviderCreateManyTypeInputEnvelope
    set?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    disconnect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    delete?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    connect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    update?: ProviderUpdateWithWhereUniqueWithoutTypeInput | ProviderUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ProviderUpdateManyWithWhereWithoutTypeInput | ProviderUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ProviderScalarWhereInput | ProviderScalarWhereInput[]
  }

  export type ProviderUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput> | ProviderCreateWithoutTypeInput[] | ProviderUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ProviderCreateOrConnectWithoutTypeInput | ProviderCreateOrConnectWithoutTypeInput[]
    upsert?: ProviderUpsertWithWhereUniqueWithoutTypeInput | ProviderUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ProviderCreateManyTypeInputEnvelope
    set?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    disconnect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    delete?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    connect?: ProviderWhereUniqueInput | ProviderWhereUniqueInput[]
    update?: ProviderUpdateWithWhereUniqueWithoutTypeInput | ProviderUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ProviderUpdateManyWithWhereWithoutTypeInput | ProviderUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ProviderScalarWhereInput | ProviderScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutPricingPlansInput = {
    create?: XOR<ProviderCreateWithoutPricingPlansInput, ProviderUncheckedCreateWithoutPricingPlansInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPricingPlansInput
    connect?: ProviderWhereUniqueInput
  }

  export type PlanCreateNestedManyWithoutPricingPlanInput = {
    create?: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput> | PlanCreateWithoutPricingPlanInput[] | PlanUncheckedCreateWithoutPricingPlanInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutPricingPlanInput | PlanCreateOrConnectWithoutPricingPlanInput[]
    createMany?: PlanCreateManyPricingPlanInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutPricingPlanInput = {
    create?: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput> | PlanCreateWithoutPricingPlanInput[] | PlanUncheckedCreateWithoutPricingPlanInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutPricingPlanInput | PlanCreateOrConnectWithoutPricingPlanInput[]
    createMany?: PlanCreateManyPricingPlanInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBillingUnitFieldUpdateOperationsInput = {
    set?: $Enums.BillingUnit
  }

  export type ProviderUpdateOneRequiredWithoutPricingPlansNestedInput = {
    create?: XOR<ProviderCreateWithoutPricingPlansInput, ProviderUncheckedCreateWithoutPricingPlansInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPricingPlansInput
    upsert?: ProviderUpsertWithoutPricingPlansInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutPricingPlansInput, ProviderUpdateWithoutPricingPlansInput>, ProviderUncheckedUpdateWithoutPricingPlansInput>
  }

  export type PlanUpdateManyWithoutPricingPlanNestedInput = {
    create?: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput> | PlanCreateWithoutPricingPlanInput[] | PlanUncheckedCreateWithoutPricingPlanInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutPricingPlanInput | PlanCreateOrConnectWithoutPricingPlanInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutPricingPlanInput | PlanUpsertWithWhereUniqueWithoutPricingPlanInput[]
    createMany?: PlanCreateManyPricingPlanInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutPricingPlanInput | PlanUpdateWithWhereUniqueWithoutPricingPlanInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutPricingPlanInput | PlanUpdateManyWithWhereWithoutPricingPlanInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutPricingPlanNestedInput = {
    create?: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput> | PlanCreateWithoutPricingPlanInput[] | PlanUncheckedCreateWithoutPricingPlanInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutPricingPlanInput | PlanCreateOrConnectWithoutPricingPlanInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutPricingPlanInput | PlanUpsertWithWhereUniqueWithoutPricingPlanInput[]
    createMany?: PlanCreateManyPricingPlanInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutPricingPlanInput | PlanUpdateWithWhereUniqueWithoutPricingPlanInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutPricingPlanInput | PlanUpdateManyWithWhereWithoutPricingPlanInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type DeploymentCreateNestedManyWithoutEnvironmentInput = {
    create?: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput> | DeploymentCreateWithoutEnvironmentInput[] | DeploymentUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutEnvironmentInput | DeploymentCreateOrConnectWithoutEnvironmentInput[]
    createMany?: DeploymentCreateManyEnvironmentInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutEnvironmentInput = {
    create?: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput> | DeploymentCreateWithoutEnvironmentInput[] | DeploymentUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutEnvironmentInput | DeploymentCreateOrConnectWithoutEnvironmentInput[]
    createMany?: DeploymentCreateManyEnvironmentInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type DeploymentUpdateManyWithoutEnvironmentNestedInput = {
    create?: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput> | DeploymentCreateWithoutEnvironmentInput[] | DeploymentUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutEnvironmentInput | DeploymentCreateOrConnectWithoutEnvironmentInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutEnvironmentInput | DeploymentUpsertWithWhereUniqueWithoutEnvironmentInput[]
    createMany?: DeploymentCreateManyEnvironmentInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutEnvironmentInput | DeploymentUpdateWithWhereUniqueWithoutEnvironmentInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutEnvironmentInput | DeploymentUpdateManyWithWhereWithoutEnvironmentInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutEnvironmentNestedInput = {
    create?: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput> | DeploymentCreateWithoutEnvironmentInput[] | DeploymentUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutEnvironmentInput | DeploymentCreateOrConnectWithoutEnvironmentInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutEnvironmentInput | DeploymentUpsertWithWhereUniqueWithoutEnvironmentInput[]
    createMany?: DeploymentCreateManyEnvironmentInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutEnvironmentInput | DeploymentUpdateWithWhereUniqueWithoutEnvironmentInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutEnvironmentInput | DeploymentUpdateManyWithWhereWithoutEnvironmentInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentCreatemicroServiceVersionsInput = {
    set: string[]
  }

  export type EnvironmentCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<EnvironmentCreateWithoutDeploymentsInput, EnvironmentUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: EnvironmentCreateOrConnectWithoutDeploymentsInput
    connect?: EnvironmentWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<ServiceCreateWithoutDeploymentsInput, ServiceUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDeploymentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<PlanCreateWithoutDeploymentsInput, PlanUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutDeploymentsInput
    connect?: PlanWhereUniqueInput
  }

  export type MonitoringConfigCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<MonitoringConfigCreateWithoutDeploymentsInput, MonitoringConfigUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: MonitoringConfigCreateOrConnectWithoutDeploymentsInput
    connect?: MonitoringConfigWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutDeployedInInput = {
    create?: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput> | ServiceCreateWithoutDeployedInInput[] | ServiceUncheckedCreateWithoutDeployedInInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDeployedInInput | ServiceCreateOrConnectWithoutDeployedInInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutDeployedInInput = {
    create?: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput> | ServiceCreateWithoutDeployedInInput[] | ServiceUncheckedCreateWithoutDeployedInInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDeployedInInput | ServiceCreateOrConnectWithoutDeployedInInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type EnumDeploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeploymentStatus
  }

  export type DeploymentUpdatemicroServiceVersionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<EnvironmentCreateWithoutDeploymentsInput, EnvironmentUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: EnvironmentCreateOrConnectWithoutDeploymentsInput
    upsert?: EnvironmentUpsertWithoutDeploymentsInput
    connect?: EnvironmentWhereUniqueInput
    update?: XOR<XOR<EnvironmentUpdateToOneWithWhereWithoutDeploymentsInput, EnvironmentUpdateWithoutDeploymentsInput>, EnvironmentUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ServiceUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<ServiceCreateWithoutDeploymentsInput, ServiceUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDeploymentsInput
    upsert?: ServiceUpsertWithoutDeploymentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutDeploymentsInput, ServiceUpdateWithoutDeploymentsInput>, ServiceUncheckedUpdateWithoutDeploymentsInput>
  }

  export type PlanUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<PlanCreateWithoutDeploymentsInput, PlanUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutDeploymentsInput
    upsert?: PlanUpsertWithoutDeploymentsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutDeploymentsInput, PlanUpdateWithoutDeploymentsInput>, PlanUncheckedUpdateWithoutDeploymentsInput>
  }

  export type MonitoringConfigUpdateOneWithoutDeploymentsNestedInput = {
    create?: XOR<MonitoringConfigCreateWithoutDeploymentsInput, MonitoringConfigUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: MonitoringConfigCreateOrConnectWithoutDeploymentsInput
    upsert?: MonitoringConfigUpsertWithoutDeploymentsInput
    disconnect?: MonitoringConfigWhereInput | boolean
    delete?: MonitoringConfigWhereInput | boolean
    connect?: MonitoringConfigWhereUniqueInput
    update?: XOR<XOR<MonitoringConfigUpdateToOneWithWhereWithoutDeploymentsInput, MonitoringConfigUpdateWithoutDeploymentsInput>, MonitoringConfigUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ServiceUpdateManyWithoutDeployedInNestedInput = {
    create?: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput> | ServiceCreateWithoutDeployedInInput[] | ServiceUncheckedCreateWithoutDeployedInInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDeployedInInput | ServiceCreateOrConnectWithoutDeployedInInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDeployedInInput | ServiceUpsertWithWhereUniqueWithoutDeployedInInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDeployedInInput | ServiceUpdateWithWhereUniqueWithoutDeployedInInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDeployedInInput | ServiceUpdateManyWithWhereWithoutDeployedInInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutDeployedInNestedInput = {
    create?: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput> | ServiceCreateWithoutDeployedInInput[] | ServiceUncheckedCreateWithoutDeployedInInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDeployedInInput | ServiceCreateOrConnectWithoutDeployedInInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDeployedInInput | ServiceUpsertWithWhereUniqueWithoutDeployedInInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDeployedInInput | ServiceUpdateWithWhereUniqueWithoutDeployedInInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDeployedInInput | ServiceUpdateManyWithWhereWithoutDeployedInInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutPlansInput = {
    create?: XOR<ProviderCreateWithoutPlansInput, ProviderUncheckedCreateWithoutPlansInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPlansInput
    connect?: ProviderWhereUniqueInput
  }

  export type PricingPlanCreateNestedOneWithoutPlansInput = {
    create?: XOR<PricingPlanCreateWithoutPlansInput, PricingPlanUncheckedCreateWithoutPlansInput>
    connectOrCreate?: PricingPlanCreateOrConnectWithoutPlansInput
    connect?: PricingPlanWhereUniqueInput
  }

  export type MonitoringConfigCreateNestedOneWithoutPlansInput = {
    create?: XOR<MonitoringConfigCreateWithoutPlansInput, MonitoringConfigUncheckedCreateWithoutPlansInput>
    connectOrCreate?: MonitoringConfigCreateOrConnectWithoutPlansInput
    connect?: MonitoringConfigWhereUniqueInput
  }

  export type DeploymentCreateNestedManyWithoutPlanInput = {
    create?: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput> | DeploymentCreateWithoutPlanInput[] | DeploymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutPlanInput | DeploymentCreateOrConnectWithoutPlanInput[]
    createMany?: DeploymentCreateManyPlanInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput> | DeploymentCreateWithoutPlanInput[] | DeploymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutPlanInput | DeploymentCreateOrConnectWithoutPlanInput[]
    createMany?: DeploymentCreateManyPlanInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ProviderUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<ProviderCreateWithoutPlansInput, ProviderUncheckedCreateWithoutPlansInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPlansInput
    upsert?: ProviderUpsertWithoutPlansInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutPlansInput, ProviderUpdateWithoutPlansInput>, ProviderUncheckedUpdateWithoutPlansInput>
  }

  export type PricingPlanUpdateOneWithoutPlansNestedInput = {
    create?: XOR<PricingPlanCreateWithoutPlansInput, PricingPlanUncheckedCreateWithoutPlansInput>
    connectOrCreate?: PricingPlanCreateOrConnectWithoutPlansInput
    upsert?: PricingPlanUpsertWithoutPlansInput
    disconnect?: PricingPlanWhereInput | boolean
    delete?: PricingPlanWhereInput | boolean
    connect?: PricingPlanWhereUniqueInput
    update?: XOR<XOR<PricingPlanUpdateToOneWithWhereWithoutPlansInput, PricingPlanUpdateWithoutPlansInput>, PricingPlanUncheckedUpdateWithoutPlansInput>
  }

  export type MonitoringConfigUpdateOneWithoutPlansNestedInput = {
    create?: XOR<MonitoringConfigCreateWithoutPlansInput, MonitoringConfigUncheckedCreateWithoutPlansInput>
    connectOrCreate?: MonitoringConfigCreateOrConnectWithoutPlansInput
    upsert?: MonitoringConfigUpsertWithoutPlansInput
    disconnect?: MonitoringConfigWhereInput | boolean
    delete?: MonitoringConfigWhereInput | boolean
    connect?: MonitoringConfigWhereUniqueInput
    update?: XOR<XOR<MonitoringConfigUpdateToOneWithWhereWithoutPlansInput, MonitoringConfigUpdateWithoutPlansInput>, MonitoringConfigUncheckedUpdateWithoutPlansInput>
  }

  export type DeploymentUpdateManyWithoutPlanNestedInput = {
    create?: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput> | DeploymentCreateWithoutPlanInput[] | DeploymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutPlanInput | DeploymentCreateOrConnectWithoutPlanInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutPlanInput | DeploymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: DeploymentCreateManyPlanInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutPlanInput | DeploymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutPlanInput | DeploymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput> | DeploymentCreateWithoutPlanInput[] | DeploymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutPlanInput | DeploymentCreateOrConnectWithoutPlanInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutPlanInput | DeploymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: DeploymentCreateManyPlanInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutPlanInput | DeploymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutPlanInput | DeploymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type DeploymentCreateNestedManyWithoutMonitoringConfigInput = {
    create?: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput> | DeploymentCreateWithoutMonitoringConfigInput[] | DeploymentUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMonitoringConfigInput | DeploymentCreateOrConnectWithoutMonitoringConfigInput[]
    createMany?: DeploymentCreateManyMonitoringConfigInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutMonitoringConfigInput = {
    create?: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput> | PlanCreateWithoutMonitoringConfigInput[] | PlanUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMonitoringConfigInput | PlanCreateOrConnectWithoutMonitoringConfigInput[]
    createMany?: PlanCreateManyMonitoringConfigInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutMonitoringConfigInput = {
    create?: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput> | DeploymentCreateWithoutMonitoringConfigInput[] | DeploymentUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMonitoringConfigInput | DeploymentCreateOrConnectWithoutMonitoringConfigInput[]
    createMany?: DeploymentCreateManyMonitoringConfigInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutMonitoringConfigInput = {
    create?: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput> | PlanCreateWithoutMonitoringConfigInput[] | PlanUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMonitoringConfigInput | PlanCreateOrConnectWithoutMonitoringConfigInput[]
    createMany?: PlanCreateManyMonitoringConfigInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type DeploymentUpdateManyWithoutMonitoringConfigNestedInput = {
    create?: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput> | DeploymentCreateWithoutMonitoringConfigInput[] | DeploymentUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMonitoringConfigInput | DeploymentCreateOrConnectWithoutMonitoringConfigInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutMonitoringConfigInput | DeploymentUpsertWithWhereUniqueWithoutMonitoringConfigInput[]
    createMany?: DeploymentCreateManyMonitoringConfigInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutMonitoringConfigInput | DeploymentUpdateWithWhereUniqueWithoutMonitoringConfigInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutMonitoringConfigInput | DeploymentUpdateManyWithWhereWithoutMonitoringConfigInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutMonitoringConfigNestedInput = {
    create?: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput> | PlanCreateWithoutMonitoringConfigInput[] | PlanUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMonitoringConfigInput | PlanCreateOrConnectWithoutMonitoringConfigInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutMonitoringConfigInput | PlanUpsertWithWhereUniqueWithoutMonitoringConfigInput[]
    createMany?: PlanCreateManyMonitoringConfigInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutMonitoringConfigInput | PlanUpdateWithWhereUniqueWithoutMonitoringConfigInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutMonitoringConfigInput | PlanUpdateManyWithWhereWithoutMonitoringConfigInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutMonitoringConfigNestedInput = {
    create?: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput> | DeploymentCreateWithoutMonitoringConfigInput[] | DeploymentUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutMonitoringConfigInput | DeploymentCreateOrConnectWithoutMonitoringConfigInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutMonitoringConfigInput | DeploymentUpsertWithWhereUniqueWithoutMonitoringConfigInput[]
    createMany?: DeploymentCreateManyMonitoringConfigInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutMonitoringConfigInput | DeploymentUpdateWithWhereUniqueWithoutMonitoringConfigInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutMonitoringConfigInput | DeploymentUpdateManyWithWhereWithoutMonitoringConfigInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutMonitoringConfigNestedInput = {
    create?: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput> | PlanCreateWithoutMonitoringConfigInput[] | PlanUncheckedCreateWithoutMonitoringConfigInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMonitoringConfigInput | PlanCreateOrConnectWithoutMonitoringConfigInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutMonitoringConfigInput | PlanUpsertWithWhereUniqueWithoutMonitoringConfigInput[]
    createMany?: PlanCreateManyMonitoringConfigInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutMonitoringConfigInput | PlanUpdateWithWhereUniqueWithoutMonitoringConfigInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutMonitoringConfigInput | PlanUpdateManyWithWhereWithoutMonitoringConfigInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
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

  export type NestedEnumBillingUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingUnit | EnumBillingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingUnitFilter<$PrismaModel> | $Enums.BillingUnit
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBillingUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingUnit | EnumBillingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillingUnit[] | ListEnumBillingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumBillingUnitWithAggregatesFilter<$PrismaModel> | $Enums.BillingUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingUnitFilter<$PrismaModel>
    _max?: NestedEnumBillingUnitFilter<$PrismaModel>
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

  export type NestedEnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutProjectInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutServiceInput
    type: ServiceTypeCreateNestedOneWithoutServicesInput
    subtype?: ServiceSubtypeCreateNestedOneWithoutServicesInput
    deployedIn?: DeploymentCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutServiceInput
    deployedIn?: DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceCreateOrConnectWithoutProjectInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProjectInput, ServiceUncheckedCreateWithoutProjectInput>
  }

  export type ServiceCreateManyProjectInputEnvelope = {
    data: ServiceCreateManyProjectInput | ServiceCreateManyProjectInput[]
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
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    projectId?: StringFilter<"Service"> | string
    gitRepoUrl?: StringFilter<"Service"> | string
    typeId?: StringFilter<"Service"> | string
    subtypeId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ProjectCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutServicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutServicesInput, ProjectUncheckedCreateWithoutServicesInput>
  }

  export type DeploymentCreateWithoutServiceInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutDeploymentsInput
    plan: PlanCreateNestedOneWithoutDeploymentsInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutDeploymentsInput
    microServices?: ServiceCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    microServices?: ServiceUncheckedCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentCreateOrConnectWithoutServiceInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput>
  }

  export type DeploymentCreateManyServiceInputEnvelope = {
    data: DeploymentCreateManyServiceInput | DeploymentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceTypeCreateWithoutServicesInput = {
    id?: string
    name: string
    subtypes?: ServiceSubtypeCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    subtypes?: ServiceSubtypeUncheckedCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeCreateOrConnectWithoutServicesInput = {
    where: ServiceTypeWhereUniqueInput
    create: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
  }

  export type ServiceSubtypeCreateWithoutServicesInput = {
    id?: string
    name: string
    serviceType: ServiceTypeCreateNestedOneWithoutSubtypesInput
  }

  export type ServiceSubtypeUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    serviceTypeId: string
  }

  export type ServiceSubtypeCreateOrConnectWithoutServicesInput = {
    where: ServiceSubtypeWhereUniqueInput
    create: XOR<ServiceSubtypeCreateWithoutServicesInput, ServiceSubtypeUncheckedCreateWithoutServicesInput>
  }

  export type DeploymentCreateWithoutMicroServicesInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutDeploymentsInput
    service: ServiceCreateNestedOneWithoutDeploymentsInput
    plan: PlanCreateNestedOneWithoutDeploymentsInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateWithoutMicroServicesInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateOrConnectWithoutMicroServicesInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput>
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
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUpsertWithWhereUniqueWithoutServiceInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutServiceInput, DeploymentUncheckedUpdateWithoutServiceInput>
    create: XOR<DeploymentCreateWithoutServiceInput, DeploymentUncheckedCreateWithoutServiceInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutServiceInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutServiceInput, DeploymentUncheckedUpdateWithoutServiceInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutServiceInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutServiceInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: StringFilter<"Deployment"> | string
    name?: StringFilter<"Deployment"> | string
    description?: StringFilter<"Deployment"> | string
    environmentId?: StringFilter<"Deployment"> | string
    serviceId?: StringFilter<"Deployment"> | string
    planId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    monitoringConfigId?: StringNullableFilter<"Deployment"> | string | null
    telemetryDashboards?: JsonFilter<"Deployment">
    appVersion?: StringFilter<"Deployment"> | string
    microServiceVersions?: StringNullableListFilter<"Deployment">
    dbVersion?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
  }

  export type ServiceTypeUpsertWithoutServicesInput = {
    update: XOR<ServiceTypeUpdateWithoutServicesInput, ServiceTypeUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    where?: ServiceTypeWhereInput
  }

  export type ServiceTypeUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceTypeWhereInput
    data: XOR<ServiceTypeUpdateWithoutServicesInput, ServiceTypeUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceTypeUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subtypes?: ServiceSubtypeUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceTypeUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subtypes?: ServiceSubtypeUncheckedUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceSubtypeUpsertWithoutServicesInput = {
    update: XOR<ServiceSubtypeUpdateWithoutServicesInput, ServiceSubtypeUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceSubtypeCreateWithoutServicesInput, ServiceSubtypeUncheckedCreateWithoutServicesInput>
    where?: ServiceSubtypeWhereInput
  }

  export type ServiceSubtypeUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceSubtypeWhereInput
    data: XOR<ServiceSubtypeUpdateWithoutServicesInput, ServiceSubtypeUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceSubtypeUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: ServiceTypeUpdateOneRequiredWithoutSubtypesNestedInput
  }

  export type ServiceSubtypeUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type DeploymentUpsertWithWhereUniqueWithoutMicroServicesInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutMicroServicesInput, DeploymentUncheckedUpdateWithoutMicroServicesInput>
    create: XOR<DeploymentCreateWithoutMicroServicesInput, DeploymentUncheckedCreateWithoutMicroServicesInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutMicroServicesInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutMicroServicesInput, DeploymentUncheckedUpdateWithoutMicroServicesInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutMicroServicesInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutMicroServicesInput>
  }

  export type ServiceSubtypeCreateWithoutServiceTypeInput = {
    id?: string
    name: string
    services?: ServiceCreateNestedManyWithoutSubtypeInput
  }

  export type ServiceSubtypeUncheckedCreateWithoutServiceTypeInput = {
    id?: string
    name: string
    services?: ServiceUncheckedCreateNestedManyWithoutSubtypeInput
  }

  export type ServiceSubtypeCreateOrConnectWithoutServiceTypeInput = {
    where: ServiceSubtypeWhereUniqueInput
    create: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServiceSubtypeCreateManyServiceTypeInputEnvelope = {
    data: ServiceSubtypeCreateManyServiceTypeInput | ServiceSubtypeCreateManyServiceTypeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutTypeInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    deployments?: DeploymentCreateNestedManyWithoutServiceInput
    subtype?: ServiceSubtypeCreateNestedOneWithoutServicesInput
    deployedIn?: DeploymentCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutServiceInput
    deployedIn?: DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceCreateOrConnectWithoutTypeInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput>
  }

  export type ServiceCreateManyTypeInputEnvelope = {
    data: ServiceCreateManyTypeInput | ServiceCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceSubtypeUpsertWithWhereUniqueWithoutServiceTypeInput = {
    where: ServiceSubtypeWhereUniqueInput
    update: XOR<ServiceSubtypeUpdateWithoutServiceTypeInput, ServiceSubtypeUncheckedUpdateWithoutServiceTypeInput>
    create: XOR<ServiceSubtypeCreateWithoutServiceTypeInput, ServiceSubtypeUncheckedCreateWithoutServiceTypeInput>
  }

  export type ServiceSubtypeUpdateWithWhereUniqueWithoutServiceTypeInput = {
    where: ServiceSubtypeWhereUniqueInput
    data: XOR<ServiceSubtypeUpdateWithoutServiceTypeInput, ServiceSubtypeUncheckedUpdateWithoutServiceTypeInput>
  }

  export type ServiceSubtypeUpdateManyWithWhereWithoutServiceTypeInput = {
    where: ServiceSubtypeScalarWhereInput
    data: XOR<ServiceSubtypeUpdateManyMutationInput, ServiceSubtypeUncheckedUpdateManyWithoutServiceTypeInput>
  }

  export type ServiceSubtypeScalarWhereInput = {
    AND?: ServiceSubtypeScalarWhereInput | ServiceSubtypeScalarWhereInput[]
    OR?: ServiceSubtypeScalarWhereInput[]
    NOT?: ServiceSubtypeScalarWhereInput | ServiceSubtypeScalarWhereInput[]
    id?: StringFilter<"ServiceSubtype"> | string
    name?: StringFilter<"ServiceSubtype"> | string
    serviceTypeId?: StringFilter<"ServiceSubtype"> | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutTypeInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutTypeInput, ServiceUncheckedUpdateWithoutTypeInput>
    create: XOR<ServiceCreateWithoutTypeInput, ServiceUncheckedCreateWithoutTypeInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutTypeInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutTypeInput, ServiceUncheckedUpdateWithoutTypeInput>
  }

  export type ServiceUpdateManyWithWhereWithoutTypeInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutTypeInput>
  }

  export type ServiceTypeCreateWithoutSubtypesInput = {
    id?: string
    name: string
    services?: ServiceCreateNestedManyWithoutTypeInput
  }

  export type ServiceTypeUncheckedCreateWithoutSubtypesInput = {
    id?: string
    name: string
    services?: ServiceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ServiceTypeCreateOrConnectWithoutSubtypesInput = {
    where: ServiceTypeWhereUniqueInput
    create: XOR<ServiceTypeCreateWithoutSubtypesInput, ServiceTypeUncheckedCreateWithoutSubtypesInput>
  }

  export type ServiceCreateWithoutSubtypeInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    deployments?: DeploymentCreateNestedManyWithoutServiceInput
    type: ServiceTypeCreateNestedOneWithoutServicesInput
    deployedIn?: DeploymentCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUncheckedCreateWithoutSubtypeInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutServiceInput
    deployedIn?: DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceCreateOrConnectWithoutSubtypeInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput>
  }

  export type ServiceCreateManySubtypeInputEnvelope = {
    data: ServiceCreateManySubtypeInput | ServiceCreateManySubtypeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceTypeUpsertWithoutSubtypesInput = {
    update: XOR<ServiceTypeUpdateWithoutSubtypesInput, ServiceTypeUncheckedUpdateWithoutSubtypesInput>
    create: XOR<ServiceTypeCreateWithoutSubtypesInput, ServiceTypeUncheckedCreateWithoutSubtypesInput>
    where?: ServiceTypeWhereInput
  }

  export type ServiceTypeUpdateToOneWithWhereWithoutSubtypesInput = {
    where?: ServiceTypeWhereInput
    data: XOR<ServiceTypeUpdateWithoutSubtypesInput, ServiceTypeUncheckedUpdateWithoutSubtypesInput>
  }

  export type ServiceTypeUpdateWithoutSubtypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutTypeNestedInput
  }

  export type ServiceTypeUncheckedUpdateWithoutSubtypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutSubtypeInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutSubtypeInput, ServiceUncheckedUpdateWithoutSubtypeInput>
    create: XOR<ServiceCreateWithoutSubtypeInput, ServiceUncheckedCreateWithoutSubtypeInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutSubtypeInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutSubtypeInput, ServiceUncheckedUpdateWithoutSubtypeInput>
  }

  export type ServiceUpdateManyWithWhereWithoutSubtypeInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutSubtypeInput>
  }

  export type ProviderTypeCreateWithoutProvidersInput = {
    id: string
  }

  export type ProviderTypeUncheckedCreateWithoutProvidersInput = {
    id: string
  }

  export type ProviderTypeCreateOrConnectWithoutProvidersInput = {
    where: ProviderTypeWhereUniqueInput
    create: XOR<ProviderTypeCreateWithoutProvidersInput, ProviderTypeUncheckedCreateWithoutProvidersInput>
  }

  export type PricingPlanCreateWithoutProviderInput = {
    id?: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutPricingPlanInput
  }

  export type PricingPlanUncheckedCreateWithoutProviderInput = {
    id?: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutPricingPlanInput
  }

  export type PricingPlanCreateOrConnectWithoutProviderInput = {
    where: PricingPlanWhereUniqueInput
    create: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput>
  }

  export type PricingPlanCreateManyProviderInputEnvelope = {
    data: PricingPlanCreateManyProviderInput | PricingPlanCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutProviderInput = {
    id?: string
    name: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingPlan?: PricingPlanCreateNestedOneWithoutPlansInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutPlansInput
    deployments?: DeploymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutProviderInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput>
  }

  export type PlanCreateManyProviderInputEnvelope = {
    data: PlanCreateManyProviderInput | PlanCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderTypeUpsertWithoutProvidersInput = {
    update: XOR<ProviderTypeUpdateWithoutProvidersInput, ProviderTypeUncheckedUpdateWithoutProvidersInput>
    create: XOR<ProviderTypeCreateWithoutProvidersInput, ProviderTypeUncheckedCreateWithoutProvidersInput>
    where?: ProviderTypeWhereInput
  }

  export type ProviderTypeUpdateToOneWithWhereWithoutProvidersInput = {
    where?: ProviderTypeWhereInput
    data: XOR<ProviderTypeUpdateWithoutProvidersInput, ProviderTypeUncheckedUpdateWithoutProvidersInput>
  }

  export type ProviderTypeUpdateWithoutProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderTypeUncheckedUpdateWithoutProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PricingPlanUpsertWithWhereUniqueWithoutProviderInput = {
    where: PricingPlanWhereUniqueInput
    update: XOR<PricingPlanUpdateWithoutProviderInput, PricingPlanUncheckedUpdateWithoutProviderInput>
    create: XOR<PricingPlanCreateWithoutProviderInput, PricingPlanUncheckedCreateWithoutProviderInput>
  }

  export type PricingPlanUpdateWithWhereUniqueWithoutProviderInput = {
    where: PricingPlanWhereUniqueInput
    data: XOR<PricingPlanUpdateWithoutProviderInput, PricingPlanUncheckedUpdateWithoutProviderInput>
  }

  export type PricingPlanUpdateManyWithWhereWithoutProviderInput = {
    where: PricingPlanScalarWhereInput
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyWithoutProviderInput>
  }

  export type PricingPlanScalarWhereInput = {
    AND?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
    OR?: PricingPlanScalarWhereInput[]
    NOT?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
    id?: StringFilter<"PricingPlan"> | string
    providerId?: StringFilter<"PricingPlan"> | string
    cost?: FloatFilter<"PricingPlan"> | number
    billingUnit?: EnumBillingUnitFilter<"PricingPlan"> | $Enums.BillingUnit
    customConfig?: JsonFilter<"PricingPlan">
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
  }

  export type PlanUpsertWithWhereUniqueWithoutProviderInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutProviderInput, PlanUncheckedUpdateWithoutProviderInput>
    create: XOR<PlanCreateWithoutProviderInput, PlanUncheckedCreateWithoutProviderInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutProviderInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutProviderInput, PlanUncheckedUpdateWithoutProviderInput>
  }

  export type PlanUpdateManyWithWhereWithoutProviderInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutProviderInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    providerId?: StringFilter<"Plan"> | string
    pricingPlanId?: StringNullableFilter<"Plan"> | string | null
    deploymentConfig?: JsonFilter<"Plan">
    monitoringConfigId?: StringNullableFilter<"Plan"> | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
  }

  export type ProviderCreateWithoutTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingPlans?: PricingPlanCreateNestedManyWithoutProviderInput
    plans?: PlanCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingPlans?: PricingPlanUncheckedCreateNestedManyWithoutProviderInput
    plans?: PlanUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutTypeInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput>
  }

  export type ProviderCreateManyTypeInputEnvelope = {
    data: ProviderCreateManyTypeInput | ProviderCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithWhereUniqueWithoutTypeInput = {
    where: ProviderWhereUniqueInput
    update: XOR<ProviderUpdateWithoutTypeInput, ProviderUncheckedUpdateWithoutTypeInput>
    create: XOR<ProviderCreateWithoutTypeInput, ProviderUncheckedCreateWithoutTypeInput>
  }

  export type ProviderUpdateWithWhereUniqueWithoutTypeInput = {
    where: ProviderWhereUniqueInput
    data: XOR<ProviderUpdateWithoutTypeInput, ProviderUncheckedUpdateWithoutTypeInput>
  }

  export type ProviderUpdateManyWithWhereWithoutTypeInput = {
    where: ProviderScalarWhereInput
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyWithoutTypeInput>
  }

  export type ProviderScalarWhereInput = {
    AND?: ProviderScalarWhereInput | ProviderScalarWhereInput[]
    OR?: ProviderScalarWhereInput[]
    NOT?: ProviderScalarWhereInput | ProviderScalarWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    typeId?: StringFilter<"Provider"> | string
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
  }

  export type ProviderCreateWithoutPricingPlansInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: ProviderTypeCreateNestedOneWithoutProvidersInput
    plans?: PlanCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutPricingPlansInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutPricingPlansInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutPricingPlansInput, ProviderUncheckedCreateWithoutPricingPlansInput>
  }

  export type PlanCreateWithoutPricingPlanInput = {
    id?: string
    name: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPlansInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutPlansInput
    deployments?: DeploymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPricingPlanInput = {
    id?: string
    name: string
    providerId: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPricingPlanInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput>
  }

  export type PlanCreateManyPricingPlanInputEnvelope = {
    data: PlanCreateManyPricingPlanInput | PlanCreateManyPricingPlanInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutPricingPlansInput = {
    update: XOR<ProviderUpdateWithoutPricingPlansInput, ProviderUncheckedUpdateWithoutPricingPlansInput>
    create: XOR<ProviderCreateWithoutPricingPlansInput, ProviderUncheckedCreateWithoutPricingPlansInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutPricingPlansInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutPricingPlansInput, ProviderUncheckedUpdateWithoutPricingPlansInput>
  }

  export type ProviderUpdateWithoutPricingPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ProviderTypeUpdateOneRequiredWithoutProvidersNestedInput
    plans?: PlanUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutPricingPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type PlanUpsertWithWhereUniqueWithoutPricingPlanInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutPricingPlanInput, PlanUncheckedUpdateWithoutPricingPlanInput>
    create: XOR<PlanCreateWithoutPricingPlanInput, PlanUncheckedCreateWithoutPricingPlanInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutPricingPlanInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutPricingPlanInput, PlanUncheckedUpdateWithoutPricingPlanInput>
  }

  export type PlanUpdateManyWithWhereWithoutPricingPlanInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutPricingPlanInput>
  }

  export type DeploymentCreateWithoutEnvironmentInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutDeploymentsInput
    plan: PlanCreateNestedOneWithoutDeploymentsInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutDeploymentsInput
    microServices?: ServiceCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUncheckedCreateWithoutEnvironmentInput = {
    id?: string
    name: string
    description: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    microServices?: ServiceUncheckedCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentCreateOrConnectWithoutEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput>
  }

  export type DeploymentCreateManyEnvironmentInputEnvelope = {
    data: DeploymentCreateManyEnvironmentInput | DeploymentCreateManyEnvironmentInput[]
    skipDuplicates?: boolean
  }

  export type DeploymentUpsertWithWhereUniqueWithoutEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutEnvironmentInput, DeploymentUncheckedUpdateWithoutEnvironmentInput>
    create: XOR<DeploymentCreateWithoutEnvironmentInput, DeploymentUncheckedCreateWithoutEnvironmentInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutEnvironmentInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutEnvironmentInput, DeploymentUncheckedUpdateWithoutEnvironmentInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutEnvironmentInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutEnvironmentInput>
  }

  export type EnvironmentCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentCreateOrConnectWithoutDeploymentsInput = {
    where: EnvironmentWhereUniqueInput
    create: XOR<EnvironmentCreateWithoutDeploymentsInput, EnvironmentUncheckedCreateWithoutDeploymentsInput>
  }

  export type ServiceCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    type: ServiceTypeCreateNestedOneWithoutServicesInput
    subtype?: ServiceSubtypeCreateNestedOneWithoutServicesInput
    deployedIn?: DeploymentCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedIn?: DeploymentUncheckedCreateNestedManyWithoutMicroServicesInput
  }

  export type ServiceCreateOrConnectWithoutDeploymentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDeploymentsInput, ServiceUncheckedCreateWithoutDeploymentsInput>
  }

  export type PlanCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPlansInput
    pricingPlan?: PricingPlanCreateNestedOneWithoutPlansInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    providerId: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutDeploymentsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutDeploymentsInput, PlanUncheckedCreateWithoutDeploymentsInput>
  }

  export type MonitoringConfigCreateWithoutDeploymentsInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigCreateOrConnectWithoutDeploymentsInput = {
    where: MonitoringConfigWhereUniqueInput
    create: XOR<MonitoringConfigCreateWithoutDeploymentsInput, MonitoringConfigUncheckedCreateWithoutDeploymentsInput>
  }

  export type ServiceCreateWithoutDeployedInInput = {
    id?: string
    name: string
    gitRepoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutServicesInput
    deployments?: DeploymentCreateNestedManyWithoutServiceInput
    type: ServiceTypeCreateNestedOneWithoutServicesInput
    subtype?: ServiceSubtypeCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutDeployedInInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutDeployedInInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput>
  }

  export type EnvironmentUpsertWithoutDeploymentsInput = {
    update: XOR<EnvironmentUpdateWithoutDeploymentsInput, EnvironmentUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<EnvironmentCreateWithoutDeploymentsInput, EnvironmentUncheckedCreateWithoutDeploymentsInput>
    where?: EnvironmentWhereInput
  }

  export type EnvironmentUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: EnvironmentWhereInput
    data: XOR<EnvironmentUpdateWithoutDeploymentsInput, EnvironmentUncheckedUpdateWithoutDeploymentsInput>
  }

  export type EnvironmentUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutDeploymentsInput = {
    update: XOR<ServiceUpdateWithoutDeploymentsInput, ServiceUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<ServiceCreateWithoutDeploymentsInput, ServiceUncheckedCreateWithoutDeploymentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutDeploymentsInput, ServiceUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ServiceUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    type?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
    subtype?: ServiceSubtypeUpdateOneWithoutServicesNestedInput
    deployedIn?: DeploymentUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedIn?: DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput
  }

  export type PlanUpsertWithoutDeploymentsInput = {
    update: XOR<PlanUpdateWithoutDeploymentsInput, PlanUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<PlanCreateWithoutDeploymentsInput, PlanUncheckedCreateWithoutDeploymentsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutDeploymentsInput, PlanUncheckedUpdateWithoutDeploymentsInput>
  }

  export type PlanUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPlansNestedInput
    pricingPlan?: PricingPlanUpdateOneWithoutPlansNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringConfigUpsertWithoutDeploymentsInput = {
    update: XOR<MonitoringConfigUpdateWithoutDeploymentsInput, MonitoringConfigUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<MonitoringConfigCreateWithoutDeploymentsInput, MonitoringConfigUncheckedCreateWithoutDeploymentsInput>
    where?: MonitoringConfigWhereInput
  }

  export type MonitoringConfigUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: MonitoringConfigWhereInput
    data: XOR<MonitoringConfigUpdateWithoutDeploymentsInput, MonitoringConfigUncheckedUpdateWithoutDeploymentsInput>
  }

  export type MonitoringConfigUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type MonitoringConfigUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutDeployedInInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutDeployedInInput, ServiceUncheckedUpdateWithoutDeployedInInput>
    create: XOR<ServiceCreateWithoutDeployedInInput, ServiceUncheckedCreateWithoutDeployedInInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutDeployedInInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutDeployedInInput, ServiceUncheckedUpdateWithoutDeployedInInput>
  }

  export type ServiceUpdateManyWithWhereWithoutDeployedInInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutDeployedInInput>
  }

  export type ProviderCreateWithoutPlansInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: ProviderTypeCreateNestedOneWithoutProvidersInput
    pricingPlans?: PricingPlanCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingPlans?: PricingPlanUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutPlansInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutPlansInput, ProviderUncheckedCreateWithoutPlansInput>
  }

  export type PricingPlanCreateWithoutPlansInput = {
    id?: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPricingPlansInput
  }

  export type PricingPlanUncheckedCreateWithoutPlansInput = {
    id?: string
    providerId: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanCreateOrConnectWithoutPlansInput = {
    where: PricingPlanWhereUniqueInput
    create: XOR<PricingPlanCreateWithoutPlansInput, PricingPlanUncheckedCreateWithoutPlansInput>
  }

  export type MonitoringConfigCreateWithoutPlansInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigUncheckedCreateWithoutPlansInput = {
    id?: string
    logs: JsonNullValueInput | InputJsonValue
    traces: JsonNullValueInput | InputJsonValue
    metrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutMonitoringConfigInput
  }

  export type MonitoringConfigCreateOrConnectWithoutPlansInput = {
    where: MonitoringConfigWhereUniqueInput
    create: XOR<MonitoringConfigCreateWithoutPlansInput, MonitoringConfigUncheckedCreateWithoutPlansInput>
  }

  export type DeploymentCreateWithoutPlanInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutDeploymentsInput
    service: ServiceCreateNestedOneWithoutDeploymentsInput
    monitoringConfig?: MonitoringConfigCreateNestedOneWithoutDeploymentsInput
    microServices?: ServiceCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUncheckedCreateWithoutPlanInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    microServices?: ServiceUncheckedCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentCreateOrConnectWithoutPlanInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput>
  }

  export type DeploymentCreateManyPlanInputEnvelope = {
    data: DeploymentCreateManyPlanInput | DeploymentCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutPlansInput = {
    update: XOR<ProviderUpdateWithoutPlansInput, ProviderUncheckedUpdateWithoutPlansInput>
    create: XOR<ProviderCreateWithoutPlansInput, ProviderUncheckedCreateWithoutPlansInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutPlansInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutPlansInput, ProviderUncheckedUpdateWithoutPlansInput>
  }

  export type ProviderUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ProviderTypeUpdateOneRequiredWithoutProvidersNestedInput
    pricingPlans?: PricingPlanUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingPlans?: PricingPlanUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type PricingPlanUpsertWithoutPlansInput = {
    update: XOR<PricingPlanUpdateWithoutPlansInput, PricingPlanUncheckedUpdateWithoutPlansInput>
    create: XOR<PricingPlanCreateWithoutPlansInput, PricingPlanUncheckedCreateWithoutPlansInput>
    where?: PricingPlanWhereInput
  }

  export type PricingPlanUpdateToOneWithWhereWithoutPlansInput = {
    where?: PricingPlanWhereInput
    data: XOR<PricingPlanUpdateWithoutPlansInput, PricingPlanUncheckedUpdateWithoutPlansInput>
  }

  export type PricingPlanUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPricingPlansNestedInput
  }

  export type PricingPlanUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringConfigUpsertWithoutPlansInput = {
    update: XOR<MonitoringConfigUpdateWithoutPlansInput, MonitoringConfigUncheckedUpdateWithoutPlansInput>
    create: XOR<MonitoringConfigCreateWithoutPlansInput, MonitoringConfigUncheckedCreateWithoutPlansInput>
    where?: MonitoringConfigWhereInput
  }

  export type MonitoringConfigUpdateToOneWithWhereWithoutPlansInput = {
    where?: MonitoringConfigWhereInput
    data: XOR<MonitoringConfigUpdateWithoutPlansInput, MonitoringConfigUncheckedUpdateWithoutPlansInput>
  }

  export type MonitoringConfigUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type MonitoringConfigUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    logs?: JsonNullValueInput | InputJsonValue
    traces?: JsonNullValueInput | InputJsonValue
    metrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutMonitoringConfigNestedInput
  }

  export type DeploymentUpsertWithWhereUniqueWithoutPlanInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutPlanInput, DeploymentUncheckedUpdateWithoutPlanInput>
    create: XOR<DeploymentCreateWithoutPlanInput, DeploymentUncheckedCreateWithoutPlanInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutPlanInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutPlanInput, DeploymentUncheckedUpdateWithoutPlanInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutPlanInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutPlanInput>
  }

  export type DeploymentCreateWithoutMonitoringConfigInput = {
    id?: string
    name: string
    description: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutDeploymentsInput
    service: ServiceCreateNestedOneWithoutDeploymentsInput
    plan: PlanCreateNestedOneWithoutDeploymentsInput
    microServices?: ServiceCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentUncheckedCreateWithoutMonitoringConfigInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    microServices?: ServiceUncheckedCreateNestedManyWithoutDeployedInInput
  }

  export type DeploymentCreateOrConnectWithoutMonitoringConfigInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput>
  }

  export type DeploymentCreateManyMonitoringConfigInputEnvelope = {
    data: DeploymentCreateManyMonitoringConfigInput | DeploymentCreateManyMonitoringConfigInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutMonitoringConfigInput = {
    id?: string
    name: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutPlansInput
    pricingPlan?: PricingPlanCreateNestedOneWithoutPlansInput
    deployments?: DeploymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutMonitoringConfigInput = {
    id?: string
    name: string
    providerId: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutMonitoringConfigInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput>
  }

  export type PlanCreateManyMonitoringConfigInputEnvelope = {
    data: PlanCreateManyMonitoringConfigInput | PlanCreateManyMonitoringConfigInput[]
    skipDuplicates?: boolean
  }

  export type DeploymentUpsertWithWhereUniqueWithoutMonitoringConfigInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutMonitoringConfigInput, DeploymentUncheckedUpdateWithoutMonitoringConfigInput>
    create: XOR<DeploymentCreateWithoutMonitoringConfigInput, DeploymentUncheckedCreateWithoutMonitoringConfigInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutMonitoringConfigInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutMonitoringConfigInput, DeploymentUncheckedUpdateWithoutMonitoringConfigInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutMonitoringConfigInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutMonitoringConfigInput>
  }

  export type PlanUpsertWithWhereUniqueWithoutMonitoringConfigInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutMonitoringConfigInput, PlanUncheckedUpdateWithoutMonitoringConfigInput>
    create: XOR<PlanCreateWithoutMonitoringConfigInput, PlanUncheckedCreateWithoutMonitoringConfigInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutMonitoringConfigInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutMonitoringConfigInput, PlanUncheckedUpdateWithoutMonitoringConfigInput>
  }

  export type PlanUpdateManyWithWhereWithoutMonitoringConfigInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutMonitoringConfigInput>
  }

  export type ServiceCreateManyProjectInput = {
    id?: string
    name: string
    gitRepoUrl: string
    typeId: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutServiceNestedInput
    type?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
    subtype?: ServiceSubtypeUpdateOneWithoutServicesNestedInput
    deployedIn?: DeploymentUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutServiceNestedInput
    deployedIn?: DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyServiceInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutDeploymentsNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutDeploymentsNestedInput
    microServices?: ServiceUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microServices?: ServiceUncheckedUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUpdateWithoutMicroServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutDeploymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutDeploymentsNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutMicroServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyWithoutMicroServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceSubtypeCreateManyServiceTypeInput = {
    id?: string
    name: string
  }

  export type ServiceCreateManyTypeInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    subtypeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceSubtypeUpdateWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutSubtypeNestedInput
  }

  export type ServiceSubtypeUncheckedUpdateWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutSubtypeNestedInput
  }

  export type ServiceSubtypeUncheckedUpdateManyWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    deployments?: DeploymentUpdateManyWithoutServiceNestedInput
    subtype?: ServiceSubtypeUpdateOneWithoutServicesNestedInput
    deployedIn?: DeploymentUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutServiceNestedInput
    deployedIn?: DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManySubtypeInput = {
    id?: string
    name: string
    projectId: string
    gitRepoUrl: string
    typeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutSubtypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    deployments?: DeploymentUpdateManyWithoutServiceNestedInput
    type?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
    deployedIn?: DeploymentUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSubtypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutServiceNestedInput
    deployedIn?: DeploymentUncheckedUpdateManyWithoutMicroServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutSubtypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateManyProviderInput = {
    id?: string
    cost: number
    billingUnit: $Enums.BillingUnit
    customConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateManyProviderInput = {
    id?: string
    name: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutPricingPlanNestedInput
  }

  export type PricingPlanUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutPricingPlanNestedInput
  }

  export type PricingPlanUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    billingUnit?: EnumBillingUnitFieldUpdateOperationsInput | $Enums.BillingUnit
    customConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingPlan?: PricingPlanUpdateOneWithoutPlansNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutPlansNestedInput
    deployments?: DeploymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateManyTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingPlans?: PricingPlanUpdateManyWithoutProviderNestedInput
    plans?: PlanUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingPlans?: PricingPlanUncheckedUpdateManyWithoutProviderNestedInput
    plans?: PlanUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateManyPricingPlanInput = {
    id?: string
    name: string
    providerId: string
    deploymentConfig: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateWithoutPricingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPlansNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutPlansNestedInput
    deployments?: DeploymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPricingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutPricingPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyEnvironmentInput = {
    id?: string
    name: string
    description: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutDeploymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutDeploymentsNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutDeploymentsNestedInput
    microServices?: ServiceUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microServices?: ServiceUncheckedUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateManyWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutDeployedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutServicesNestedInput
    deployments?: DeploymentUpdateManyWithoutServiceNestedInput
    type?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
    subtype?: ServiceSubtypeUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDeployedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutDeployedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    gitRepoUrl?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    subtypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyPlanInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    status: $Enums.DeploymentStatus
    monitoringConfigId?: string | null
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutDeploymentsNestedInput
    monitoringConfig?: MonitoringConfigUpdateOneWithoutDeploymentsNestedInput
    microServices?: ServiceUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microServices?: ServiceUncheckedUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    monitoringConfigId?: NullableStringFieldUpdateOperationsInput | string | null
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyMonitoringConfigInput = {
    id?: string
    name: string
    description: string
    environmentId: string
    serviceId: string
    planId: string
    status: $Enums.DeploymentStatus
    telemetryDashboards: JsonNullValueInput | InputJsonValue
    appVersion: string
    microServiceVersions?: DeploymentCreatemicroServiceVersionsInput | string[]
    dbVersion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateManyMonitoringConfigInput = {
    id?: string
    name: string
    providerId: string
    pricingPlanId?: string | null
    deploymentConfig: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutDeploymentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutDeploymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutDeploymentsNestedInput
    microServices?: ServiceUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microServices?: ServiceUncheckedUpdateManyWithoutDeployedInNestedInput
  }

  export type DeploymentUncheckedUpdateManyWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    telemetryDashboards?: JsonNullValueInput | InputJsonValue
    appVersion?: StringFieldUpdateOperationsInput | string
    microServiceVersions?: DeploymentUpdatemicroServiceVersionsInput | string[]
    dbVersion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutPlansNestedInput
    pricingPlan?: PricingPlanUpdateOneWithoutPlansNestedInput
    deployments?: DeploymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutMonitoringConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    pricingPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    deploymentConfig?: JsonNullValueInput | InputJsonValue
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
     * @deprecated Use ServiceTypeCountOutputTypeDefaultArgs instead
     */
    export type ServiceTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceSubtypeCountOutputTypeDefaultArgs instead
     */
    export type ServiceSubtypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceSubtypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderCountOutputTypeDefaultArgs instead
     */
    export type ProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderTypeCountOutputTypeDefaultArgs instead
     */
    export type ProviderTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PricingPlanCountOutputTypeDefaultArgs instead
     */
    export type PricingPlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PricingPlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvironmentCountOutputTypeDefaultArgs instead
     */
    export type EnvironmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvironmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeploymentCountOutputTypeDefaultArgs instead
     */
    export type DeploymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeploymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonitoringConfigCountOutputTypeDefaultArgs instead
     */
    export type MonitoringConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonitoringConfigCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceTypeDefaultArgs instead
     */
    export type ServiceTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceSubtypeDefaultArgs instead
     */
    export type ServiceSubtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceSubtypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderDefaultArgs instead
     */
    export type ProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderTypeDefaultArgs instead
     */
    export type ProviderTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PricingPlanDefaultArgs instead
     */
    export type PricingPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PricingPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvironmentDefaultArgs instead
     */
    export type EnvironmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvironmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeploymentDefaultArgs instead
     */
    export type DeploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeploymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonitoringConfigDefaultArgs instead
     */
    export type MonitoringConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonitoringConfigDefaultArgs<ExtArgs>

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