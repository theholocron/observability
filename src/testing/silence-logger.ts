import { vi } from "vitest";

import { NoopLogger } from "../core/logger.js";
import type { CreateLoggerResult } from "../logger/create.js";

const SILENT_RUN_ID = "00000000-0000-4000-8000-000000000000";

/**
 * Replace `createLogger` in the `/logger` module with one that returns a
 * {@link NoopLogger}, so code under test that builds a real Pino logger stops
 * writing NDJSON to stdout. Everything else the module exports passes through.
 *
 * `vi.mock` only takes effect in the consumer's own file, so call this from a
 * vitest setup file:
 *
 * ```ts
 * vi.mock("@theholocron/observability/logger", async (importOriginal) => {
 *   const { silenceLogger } = await import("@theholocron/observability/testing");
 *   return silenceLogger(await importOriginal());
 * });
 * ```
 */
export function silenceLogger<T extends { createLogger: unknown }>(
	actual: T
): Omit<T, "createLogger"> & { createLogger: () => CreateLoggerResult } {
	return {
		...actual,
		createLogger: vi.fn(() => ({ logger: new NoopLogger(), runId: SILENT_RUN_ID })),
	};
}
