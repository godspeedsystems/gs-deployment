import {
  GSContext,
  GSStatus,
  PlainObject,
  GSDataSource,
} from '@godspeedsystems/core';
import { PrismaClient } from '@prisma/client';

// Assuming you have a library/module named `datasource` containing functions for interacting with your data sources

async function createService(
  ctx: GSContext,
  args: PlainObject,
): Promise<GSStatus> {
  const {
    inputs: {
      data: { params, body, query, user, headers },
    },
    childLogger,
    logger,
    outputs,
    functions,
    datasources,
  } = ctx;

  console.log('body :: %o', body);
  logger.info('body :: :: %o', body);

  logger.info('Datasources :: :: ', datasources);

  // Get the Prisma client from the gs-paas datasource
  const client: GSDataSource = ctx.datasources.buildPiper;

  // Create the service using the datasource function
  // const createdService = await client.service.create({ data: body });

  const res = await client.execute(ctx, {
    meta: {
      method: 'post',
      url: '/api/v1/project/82/component/',
    },
    data: body, // Use URL-encoded format
    headers: {
      'Content-Type': 'application/json', // Set JSON content type
    },
  });
  console.log('res :: ', res);
  // Return a GSStatus object with success message and data
  return res;

  // Alternative return format (equivalent to the provided sample):
  // return {
  //   code: 201,
  //   data: createdService,
  //   success: true,
  //   message: "Successfully created new Service",
  //   headers: { custom_header_1: "something" },
  // };
}

export default createService;
