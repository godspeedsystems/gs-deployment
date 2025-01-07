import { GSContext, GSStatus, PlainObject } from '@godspeedsystems/core';
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

  // Get the Prisma client from the gs-paas datasource
  const client: PrismaClient = datasources.gsPaas.client;

  // Create the service using the datasource function
  const createdService = await client.service.create({ data: body });

  // Return a GSStatus object with success message and data
  return new GSStatus(
    true,
    201,
    'Successfully created new Service',
    createdService,
    { custom_header_1: 'something' },
  );

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
